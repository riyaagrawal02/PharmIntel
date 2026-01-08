import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Clock,
  CheckCircle2,
  FileText,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { runAgent } from "@/services/agentApi";



type PhaseItem = {
  phase: string;
  count: number;
};


const saveReport = (report: any) => {
  const existing =
    JSON.parse(localStorage.getItem("pharmintel_reports") || "[]");

  const saved = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    prompt: report.plan.objective,
    score: report.intelligence.opportunity_score,
    data: report,
  };

  localStorage.setItem(
    "pharmintel_reports",
    JSON.stringify([saved, ...existing])
  );
};

const exportJSON = (data: any) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pharmintel-report.json";
  link.click();
};

export function WorkspacePage() {
  const [prompt, setPrompt] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("summary");

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    try {
      setIsRunning(true);
      setError("");
      setResponse(null);

      const data = await runAgent(prompt);
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsRunning(false);
    }
  };

  const workflow = response?.plan?.tasks || [];
  const intelligence = response?.intelligence;
  const execution = response?.execution;

  const phaseData: PhaseItem[] = response?.data?.phase_distribution
    ? (Object.entries(response.data.phase_distribution).map(
        ([phase, count]) => ({
          phase,
          count: Number(count),
        })
      ) as PhaseItem[])
    : [];

  return (
    <div className="flex h-[calc(100vh-73px)] overflow-hidden">
     
      <div className="w-[30%] border-r bg-slate-50 flex flex-col">
        <div className="p-6 border-b bg-white">
          <h2 className="text-lg font-semibold mb-4">
            Research Query
          </h2>

          <Textarea
            placeholder="Find repurposing opportunities for respiratory drugs in India"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] mb-4 resize-none"
          />

          <Button
            onClick={handleSubmit}
            disabled={isRunning}
            className="w-full"
          >
            {isRunning ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Running Agents
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Run Analysis
              </>
            )}
          </Button>

          {isRunning && (
            <p className="text-xs text-muted-foreground mt-2">
              Orchestrating domain agents and synthesizing intelligence…
            </p>
          )}

          {error && (
            <p className="text-sm text-red-600 mt-3">
              {error}
            </p>
          )}
        </div>

       
        <div className="flex-1 p-6 overflow-y-auto">
          <h3 className="text-sm font-semibold mb-4">
            Agent Workflow
          </h3>

          <div className="space-y-3">
            {workflow.map((task: any, i: number) => (
              <div key={i} className="flex gap-3">
                {isRunning ? (
                  <Clock className="h-4 w-4 text-blue-600 animate-spin" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                )}
                <div>
                  <p className="text-sm font-medium">
                    {task.agent} Agent
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {task.task}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {execution && (
            <Card className="mt-6 p-4">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Agents Executed" value={execution.total_agents} />
                <Stat
                  label="Success Rate"
                  value={`${Math.round(
                    (execution.successful_agents /
                      execution.total_agents) *
                      100
                  )}%`}
                />
              </div>
            </Card>
          )}
        </div>
      </div>

      <div className="w-[70%] bg-white flex flex-col">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Results Dashboard
          </h2>

          {response && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => saveReport(response)}
              >
                Save Report
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => exportJSON(response)}
              >
                <FileText className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          )}
        </div>

        {intelligence && (
          <div className="p-6 grid grid-cols-3 gap-4">
            <Metric label="Intent" value={response.intent} />
            <Metric
              label="Opportunity Score"
              value={`${Math.round(
                intelligence.opportunity_score * 100
              )}%`}
            />
            <Metric
              label="Recommendations"
              value={intelligence.recommendations.length}
            />
          </div>
        )}

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col"
        >
          <TabsList className="mx-6">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="trials">Clinical Trials</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto p-6">
            <TabsContent value="summary">
              {intelligence && (
                <>
                  <Card className="p-6 mb-6">
                    <h3 className="font-semibold mb-2">
                      Executive Summary
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {intelligence.summary}
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">
                      Clinical Phase Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={phaseData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="phase" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#2563eb" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                </>
              )}
            </TabsContent>

            <TabsContent value="trials">
              {phaseData.map((p) => (
                <Card key={p.phase} className="p-4 mb-3">
                  <div className="flex justify-between">
                    <span className="font-medium">
                      {p.phase}
                    </span>
                    <Badge>{p.count} trials</Badge>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="evidence">
              {response?.citations?.map((c: any, i: number) => (
                <Card key={i} className="p-4 mb-3">
                  <p className="font-medium">{c.source}</p>
                  <p className="text-xs text-muted-foreground">
                    {c.type}
                  </p>
                </Card>
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: any }) {
  return (
    <Card className="p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: any }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

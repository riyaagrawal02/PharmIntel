import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Database,
  Brain,
  LineChart,
  Shield,
  Zap,
  Users,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
  
      <section className="max-w-[1600px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
       
          <div className="space-y-8">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              Agentic AI for Pharmaceutical Innovation
            </span>

            <h1 className="text-6xl font-semibold leading-tight">
              PharmIntel
            </h1>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Accelerate drug discovery with intelligent agents that analyze,
              predict, and optimize pharmaceutical research workflows.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="px-8"
                onClick={() => navigate("/workspace")}
              >
                Start Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/workspace")}
              >
                View Workflow
              </Button>
            </div>

            <div className="flex flex-wrap gap-12 pt-8 border-t border-border">
              <Stat label="Active Projects" value="500+" />
              <Stat label="Accuracy Rate" value="98%" />
              <Stat label="Faster Discovery" value="2.5x" />
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[600px] flex items-center justify-center">
            <MolecularNetwork />
          </div>
        </div>
      </section>

      
      <section className="bg-slate-50 py-24">
        <div className="max-w-[1600px] mx-auto px-8">
          <SectionHeader
            title="Enterprise-Grade Intelligence"
            subtitle="Built for pharmaceutical R&D teams who demand precision, compliance, and actionable insights"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              icon={<Brain />}
              title="Agentic Workflow"
              text="Autonomous AI agents execute complex research tasks with full transparency."
            />
            <Feature
              icon={<Database />}
              title="Integrated Data"
              text="Connects PubMed, ClinicalTrials.gov, patents, and proprietary datasets."
            />
            <Feature
              icon={<LineChart />}
              title="Predictive Analytics"
              text="Predict efficacy, toxicity, and clinical outcomes with validated models."
            />
            <Feature
              icon={<Shield />}
              title="Compliance Ready"
              text="SOC2-ready, audit trails, and enterprise governance."
            />
            <Feature
              icon={<Zap />}
              title="Real-Time Insights"
              text="Monitor agent execution and intermediate results live."
            />
            <Feature
              icon={<Users />}
              title="Collaboration"
              text="Share reports, insights, and institutional knowledge securely."
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-8">
          <SectionHeader
            title="Trusted by Leading Pharma"
            subtitle="From target identification to clinical trial intelligence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UseCase
              title="Target Discovery"
              text="Identify novel therapeutic targets using multi-source biological intelligence."
              tags={["Oncology", "CNS", "Rare Disease"]}
            />
            <UseCase
              title="Lead Optimization"
              text="Optimize molecules for ADME, safety, and synthesizability."
              tags={["Small Molecules", "Biologics"]}
            />
            <UseCase
              title="Clinical Trial Intelligence"
              text="Design better trials using historical and real-world evidence."
              tags={["Phase I–III", "RWE"]}
            />
            <UseCase
              title="Competitive Intelligence"
              text="Track patents, pipelines, and emerging therapeutic modalities."
              tags={["Patent", "Pipeline"]}
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20">
        <div className="max-w-[1600px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join pharmaceutical teams using PharmIntel to transform R&D workflows.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8"
              onClick={() => navigate("/workspace")}
            >
              Start Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 PharmIntel · Agentic AI for Pharmaceutical Innovation</p>
          <div className="flex gap-6 text-sm">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="p-8 hover:shadow-lg transition">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </Card>
  );
}


function UseCase({
  title,
  text,
  tags,
}: {
  title: string;
  text: string;
  tags: string[];
}) {
  return (
    <Card className="p-10">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{text}</p>
      <div className="flex gap-3 flex-wrap">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}



function MolecularNetwork() {
  return (
    <svg viewBox="0 0 600 600" className="w-full h-full">
      
      <g stroke="#2563eb" strokeWidth="1.2" opacity="0.35">
        <line x1="300" y1="300" x2="300" y2="120" />
        <line x1="300" y1="300" x2="470" y2="210" />
        <line x1="300" y1="300" x2="420" y2="390" />
        <line x1="300" y1="300" x2="180" y2="390" />
        <line x1="300" y1="300" x2="130" y2="210" />
      </g>

   
      <defs>
        <radialGradient id="masterGlow">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="300" cy="300" r="110" fill="url(#masterGlow)" />

    
      <circle cx="300" cy="300" r="36" fill="#2563eb" />
      <text
        x="300"
        y="306"
        textAnchor="middle"
        fontSize="10"
        fill="#ffffff"
        fontWeight="500"
      >
        Master Agent
      </text>

      <AgentNode x={300} y={120} label="Clinical" />
      <AgentNode x={470} y={210} label="Patent" />
      <AgentNode x={420} y={390} label="Market" />
      <AgentNode x={180} y={390} label="Web" />
      <AgentNode x={130} y={210} label="Internal" />
    </svg>
  );
}

function AgentNode({
  x,
  y,
  label,
}: {
  x: number;
  y: number;
  label: string;
}) {
  return (
    <>
      <circle cx={x} cy={y} r="18" fill="#3b82f6" />
      <circle cx={x} cy={y} r="30" fill="#3b82f6" opacity="0.18" />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize="9"
        fill="#1e3a8a"
        fontWeight="500"
      >
        {label}
      </text>
    </>
  );
}

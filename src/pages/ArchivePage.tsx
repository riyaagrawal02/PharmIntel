import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download } from "lucide-react";

type SavedReport = {
  id: string;
  timestamp: string;
  prompt: string;
  score: number;
  data: any;
};

export function ArchivePage() {
  const [reports, setReports] = useState<SavedReport[]>([]);

  useEffect(() => {
    const stored =
      JSON.parse(
        localStorage.getItem("pharmintel_reports") || "[]"
      ) || [];
    setReports(stored);
  }, []);

  const exportJSON = (data: any, id: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `pharmintel-report-${id}.json`;
    link.click();
  };

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Archived Reports
      </h1>

      {reports.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No saved reports yet. Run an analysis and save it
          from the workspace.
        </p>
      )}

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium mb-1">
                  {report.prompt}
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(
                    report.timestamp
                  ).toLocaleString()}
                </p>
              </div>

              <Badge>
                {Math.round(report.score * 100)}%
              </Badge>
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  console.log("Report Data:", report.data)
                }
              >
                <FileText className="mr-2 h-4 w-4" />
                View
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  exportJSON(report.data, report.id)
                }
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

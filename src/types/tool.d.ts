type Tool = {
  name: string;
  path: string;
};

type Category = {
  name: string;
  path: string;
  tools: Tool[];
};

export type { Tool, Category };

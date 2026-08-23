import { NextRequest, NextResponse } from 'next/server';

const tools = [
  { name: 'get_all', description: 'Return the complete project index.', inputSchema: { type: 'object', properties: {} } },
  { name: 'get_by_id', description: 'Open one project record by id.', inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] } },
  { name: 'search', description: 'Find records by a text query.', inputSchema: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] } },
];

export function GET() {
  return NextResponse.json({
    name: 'Projects Showcase',
    version: '1.0.0',
    description: 'A read-only catalog of projects from the Book Dev boundary.',
    tools,
  });
}

export async function POST(request: NextRequest) {
  const requestId: number | string = 0;

  try {
    const body = await request.json();
    const { method, params } = body;
    let result;

    switch (method) {
      case 'initialize':
        result = {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {}, resources: {} },
          serverInfo: {
            name: 'Projects Showcase',
            version: '1.0.0',
            description: 'Projects Showcase - MCP Server'
          }
        };
        break;

      case 'tools/list':
        result = {
          tools
        };
        break;

      case 'tools/call':
        const toolName = params?.name;
        result = { message: 'Tool called: ' + toolName, data: params?.arguments };
        break;

      default:
        throw new Error(`Unknown method: ${method}`);
    }

    return NextResponse.json({ jsonrpc: '2.0', id: requestId, result });
  } catch (error) {
    return NextResponse.json({ jsonrpc: '2.0', id: requestId || 1, error: { code: -32000, message: error instanceof Error ? error.message : 'Error' } }, { status: 500 });
  }
}

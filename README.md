# Telography Landing Page

[cloudflarebutton]

A modern, full-stack AI chat application built with Cloudflare Workers, Agents SDK, and React. Features persistent chat sessions, streaming responses, tool calling (including web search and weather), and multi-model support via Cloudflare AI Gateway.

## Features

- **Persistent Chat Sessions**: Unlimited sessions managed via Durable Objects with full CRUD operations.
- **AI Integration**: Supports Gemini models through Cloudflare AI Gateway with streaming and non-streaming responses.
- **Tool Calling**: Built-in tools for web search (SerpAPI), weather, and extensible MCP (Model Context Protocol) integration.
- **Real-time Streaming**: Server-sent events for low-latency chat experiences.
- **Session Management**: List, create, update, delete sessions with auto-generated titles.
- **Responsive UI**: Modern React app with shadcn/ui components, dark mode, and Tailwind CSS.
- **Type-Safe**: Full TypeScript support across frontend and backend.
- **Production-Ready**: Includes error handling, logging, CORS, and health checks.

## Tech Stack

- **Backend**: Cloudflare Workers, Hono, Agents SDK, OpenAI SDK, Durable Objects.
- **Frontend**: React 18, Vite, TypeScript, TanStack Query, React Router, shadcn/ui, Tailwind CSS.
- **AI/ML**: Cloudflare AI Gateway, Gemini models, SerpAPI, MCP SDK.
- **Tools**: Bun (package manager), Wrangler (CLI), esbuild/Vite (bundling).

## Quick Start

1. **Prerequisites**:
   - [Bun](https://bun.sh/) installed.
   - [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) installed.
   - Cloudflare account with AI Gateway configured.

2. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd telography-landing-f0oojjvahy_abnsmcbkvl
   bun install
   ```

3. **Configure Environment**:
   Edit `wrangler.jsonc` and set:
   ```json
   "vars": {
     "CF_AI_BASE_URL": "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",
     "CF_AI_API_KEY": "{your_ai_gateway_token}",
     "SERPAPI_KEY": "{your_serpapi_key}",
     "OPENROUTER_API_KEY": "{optional_openrouter_key}"
   }
   ```
   Run `bun run cf-typegen` to generate types.

4. **Development**:
   ```bash
   bun dev
   ```
   Opens at `http://localhost:3000` (or `${PORT:-3000}`).

## Local Development

- **Hot Reload**: Frontend auto-reloads on changes. Worker rebuilds on save.
- **Type Generation**: `bun run cf-typegen` after env changes.
- **Linting**: `bun run lint`.
- **Build**: `bun run build`.
- **Preview**: `bun run preview`.

API Endpoints (under `/api/`):
- `POST /api/chat/:sessionId/chat` - Send message (supports streaming).
- `GET /api/chat/:sessionId/messages` - Get chat state.
- `DELETE /api/chat/:sessionId/clear` - Clear session.
- `POST /api/chat/:sessionId/model` - Update model.
- `/api/sessions` - Manage sessions (GET list, POST create, DELETE clear/all).

## Deployment

Deploy to Cloudflare Workers/Pages with one command:

```bash
bun run deploy
```

This builds the frontend assets and deploys the Worker. Your app will be live at `https://{your-worker-name}.workers.dev`.

For custom domains or Pages integration:
1. Run `wrangler deploy --assets-upload`.
2. Bind assets in `wrangler.toml` or dashboard.

[cloudflarebutton]

**Production Checklist**:
- Set `SERPAPI_KEY` for web search.
- Configure Durable Objects migration in `wrangler.jsonc`.
- Enable observability for logs/metrics.
- Review rate limits on AI Gateway.

## Extending the App

- **New Tools**: Add to `worker/tools.ts` and expose via `getToolDefinitions()`.
- **Custom Routes**: Edit `worker/userRoutes.ts`.
- **UI Components**: Use shadcn/ui (`bunx shadcn@latest add <component>`).
- **MCP Servers**: Add to `worker/mcp-client.ts` for advanced tools.

## Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Agents SDK](https://developers.cloudflare.com/agents/)
- File issues here on GitHub.
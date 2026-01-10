from http.server import SimpleHTTPRequestHandler, HTTPServer
import argparse

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header(
            "Cache-Control",
            "no-store, no-cache, must-revalidate, max-age=0"
        )
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

def run():
    parser = argparse.ArgumentParser(description="No-cache dev server")
    parser.add_argument(
        "-d", "--directory",
        default=".",
        help="Directory to serve (default: current directory)"
    )
    parser.add_argument(
        "-p", "--port",
        type=int,
        default=8000,
        help="Port to run the server on"
    )
    parser.add_argument(
        "--bind",
        default="localhost",
        help="Address to bind the server to (default: localhost)"
    )

    args = parser.parse_args()

    handler = lambda *handler_args, **handler_kwargs: (
        NoCacheHandler(
            *handler_args,
            directory=args.directory,
            **handler_kwargs
        )
    )

    server = HTTPServer((args.bind, args.port), handler)
    print(f"Serving '{args.directory}' at http://{args.bind}:{args.port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
    finally:
        server.shutdown()
        server.server_close()
        print("Server stopped cleanly.")

if __name__ == "__main__":
    run()

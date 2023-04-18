import http.server
import socketserver

PORT = 8000  # Port number to listen on

# Define the handler to use for incoming requests
handler = http.server.SimpleHTTPRequestHandler

# Define a custom request handler to handle POST requests
class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        payload = self.rfile.read(content_length).decode('utf-8')
        print(f'Received message: {payload}')
        if payload != "":
            with open('data.txt',"w") as d:
                    d.write(payload)
            import login
            quit()
            
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'Message received successfully.')

# Create the HTTP server and bind it to the specified port
httpd = socketserver.TCPServer(('', PORT), MyRequestHandler)
print(f'Server listening on port {PORT}')

# Start the server
httpd.serve_forever()
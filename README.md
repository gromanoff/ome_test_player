````markdown
# OME WebRTC React Player

A simple React interface for testing **WebRTC playback via OvenMediaEngine (OME)**.

It allows you to:
- Enter the WebRTC stream URL (e.g. from OME Edge)
- Optionally provide a stream password
- Watch the stream using OvenPlayer

> The app is fully Dockerized. No Node.js or Yarn is required on the host machine.

---

## 🧱 Tech Stack

- React + Vite
- OvenPlayer
- Node.js 20 (build stage)
- Nginx (static server)

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/your-org/ome-react-player.git
cd ome-react-player
````

### 2. Build and run the container

```bash
docker-compose up --build -d
```

### 3. Open in your browser

```
http://localhost:3000
```

You will see a simple UI with:

* Stream URL input (e.g. `ws://your-edge-host:3333/app/stream/master`)
* Optional password input
* Connect button to start playback

---

## 📦 Production Build

All assets are built inside the Docker container using `yarn build` (no tools required on the host).

The final app is served via Nginx from `/usr/share/nginx/html`.

---

## ✅ Example WebRTC Stream URL

```
ws://your-edge-host:3333/app/stream/master
```

Format:

```
ws://{OME_HOST}:{SIGNALING_PORT}/{APP_NAME}/{STREAM_NAME}/master
```

---



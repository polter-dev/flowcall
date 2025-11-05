# FlowCall

A real-time chat app for voice, video, and text that adapts to poor networks by dynamically tuning resolution/bitrate/codec. A simple AI chooses bitrates from live network signals (jitter, loss, RTT)

Goal-> Learn real-time comms, observability, and network adaptation 

# Tech Stack (to be updated as project gets worked on more)
  - React + Vite
  - Typescript
  - Node.js + Express
  - WebRTC + ICE

-----------------------------------------------------


Idea behind this project

Collaboratively work on the following tasks
 - Create a room and receive a 6-character code -> Current max of 6 users can join this call
 - Join with mic/cam preview and choose input/output devices.
 - See others’ videos and hear audio with low latency.
 - Video stays smooth by reducing quality when the network is poor.
 - Share screen and switch back to camera easily (one at a time for the time being)
 - Mute/hide video and send short text messages.

Eventually expand to larger quantities if needed 

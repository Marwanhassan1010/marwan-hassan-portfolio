export interface Project {
  slug: string
  title: string
  category: string
  summary: string
  technologies: string[]
  repository?: string
  evidence: string
  diagram: string[]
  sections: { title: string; text: string }[]
}

export const projects: Project[] = [
  {
    slug: 'haf-freight',
    title: 'HAF Freight Digital Platform',
    category: 'Client project · Web development',
    summary: 'A logistics website with a shipping inquiry form that routes requests to the freight team by email.',
    technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Express', 'Nodemailer'],
    repository: 'https://github.com/Marwanhassan1010/hafreight',
    evidence: 'Source reviewed from a local checkout at fa5bb4a.',
    diagram: ['Browser form', 'Express route', 'Email inbox'],
    sections: [
      { title: 'Problem and context', text: 'The client needed a website that explained its services and gave prospective customers a structured way to ask about shipping between ports.' },
      { title: 'My contribution', text: 'I built the client website and the inquiry workflow, including the browser form and its connection to the Node.js server.' },
      { title: 'Architecture', text: 'Express serves the static website and handles POST /send-request. The browser sends a JSON request and uses the response to show success or failure. The server formats the inquiry and uses Nodemailer to send it to the freight team.' },
      { title: 'Frontend implementation', text: 'The form populates country codes from a local dataset and uses searchable Select2 controls for origin and destination ports. It shows field-level validation messages, handles request failures, and resets fields after success. The site stores its theme preference in localStorage.' },
      { title: 'Engineering challenge', text: 'The form has to collect consistent port and contact information while keeping submission straightforward. Searchable port lists reduce free-text ambiguity, and selecting a country pre-fills the dialing prefix.' },
      { title: 'Validation and outcome', text: 'The source contains client-side checks for required fields and email and phone formatting, plus server success and error responses for email delivery. The reviewed checkout uses a localhost API URL. Live delivery and automated tests were unverified.' },
      { title: 'Next iteration', text: 'Use a same-origin endpoint, validate inputs on the server, and add tests for malformed requests, country dialing prefixes and mail delivery failures.' },
    ],
  },
  {
    slug: 'autonomous-shuttle',
    title: 'Autonomous Shuttle Bus System',
    category: 'A+ graduation project · Team engineering',
    summary: 'A multidisciplinary graduation project that explored autonomous campus transport and a mobile interface.',
    technologies: ['Flutter', 'Firebase', 'Python', 'Flask', 'MQTT', 'GPS', 'Google Maps'],
    evidence: 'Project scope comes from the presentation. The technology list and A+ grade come from Marwan’s project brief.',
    diagram: ['Campus transport', 'Shuttle prototype', 'Mobile interface'],
    sections: [
      { title: 'Problem and context', text: 'Students and visitors can have difficulty navigating a large campus. The team proposed a shuttle to improve access to campus facilities.' },
      { title: 'Collaboration', text: 'I worked on this graduation project with students from computer, mechanical and mechatronics engineering.' },
      { title: 'Proposed architecture', text: 'The presentation describes sensor integration, a control system and a mobile app as parts of the proposed solution. The individual software responsibilities, data flow and interface contracts await source review.' },
      { title: 'Prototype and testing scope', text: 'The presentation describes planned range and accuracy checks for ultrasonic sensors and LiDAR, and planned controller comparisons. These are planned validation activities from the presentation.' },
      { title: 'Outcome', text: 'The graduation project earned an A+.' },
    ],
  },
  {
    slug: 'habitify',
    title: 'Habitify',
    category: 'Mobile development · Habit tracking',
    summary: 'A Flutter habit tracker built with Provider for state management and Hive for local persistence.',
    technologies: ['Flutter', 'Dart', 'Hive', 'Provider'],
    evidence: 'Project description and stack come from Marwan’s project brief. Implementation details await source review.',
    diagram: ['Flutter', 'Provider', 'Hive'],
    sections: [
      { title: 'Problem and context', text: 'I built Habitify as a mobile app for tracking habits.' },
      { title: 'Technical approach', text: 'The stated stack uses Flutter for the interface, Provider for app state and Hive for device-local persistence.' },
    ],
  },
]

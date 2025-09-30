// Skills data embedded directly in JavaScript
const skillsData = {
  frontend: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Vue.js",
    "Nuxt.js",
    "Angular",
    "Tailwind CSS",
    "SASS/SCSS",
    "Styled Components",
    "Vite",
    "Testing Library / Cypress",
    "Storybook",
    "GraphQL",
    "Web Performance Optimization",
    "Accessibility (a11y)",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "Spring Boot",
    "Go",
    "Rust",
    "Microservices Architecture",
    "gRPC",
    "REST API Design",
    "GraphQL APIs",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "Kafka",
    "Authentication & Authorization",
    "Unit & Integration Testing",
    "Docker",
  ],

  fullstack: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Docker",
    "Kubernetes",
    "CI/CD Pipelines",
    "AWS",
    "Serverless Architectures",
    "Jest / Mocha",
    "Design Patterns",
    "Microservices",
    "Cloud Deployment",
  ],

  mobile_dev: [
    "React Native",
    "Flutter",
    "Dart",
    "Kotlin",
    "Swift",
    "Jetpack Compose",
    "SwiftUI",
    "Firebase",
    "SQLite",
    "App State Management (Bloc, Redux)",
    "GraphQL APIs",
    "Push Notifications",
    "App Performance Optimization",
    "App Security",
    "Store Deployment Workflows",
  ],

  game_dev: [
    "Unity",
    "Unreal Engine",
    "C#",
    "C++",
    "Game Physics",
    "Rendering Optimization",
    "Multiplayer Networking",
    "AI for Games",
    "Shader Programming (HLSL/GLSL)",
    "Animation Systems",
    "AR/VR Development",
    "Procedural Generation",
    "3D Modeling Pipelines",
    "Cross-platform Deployment",
  ],

  blockchain: [
    "Solidity",
    "Ethereum",
    "Smart Contracts",
    "Web3.js",
    "Ethers.js",
    "Polygon / Layer-2 Solutions",
    "Rust (for Solana)",
    "Hardhat",
    "Truffle",
    "Ganache",
    "DeFi Protocols",
    "NFT Standards (ERC-721, ERC-1155)",
    "Smart Contract Security",
    "Zero-Knowledge Proofs (ZK-SNARKs)",
    "Consensus Algorithms",
    "Blockchain Scalability",
  ],

  embedded_systems: [
    "C",
    "C++",
    "Embedded Linux",
    "RTOS",
    "IoT Protocols (MQTT, CoAP)",
    "ARM Cortex",
    "Microcontrollers (ESP32, STM32)",
    "FPGA Development",
    "PCB Design",
    "Sensor Integration",
    "Bluetooth Low Energy (BLE)",
    "CAN Bus",
    "Low-Power Systems",
    "Hardware Debugging",
  ],

  data_science: [
    "Python",
    "R",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Jupyter",
    "Data Cleaning",
    "Feature Engineering",
    "A/B Testing",
    "Hypothesis Testing",
    "Time Series Forecasting",
    "Statistical Modeling",
    "SQL",
    "Big Data (Hadoop/Spark)",
    "Tableau",
    "Power BI",
    "ETL Pipelines",
  ],

  data_engineering: [
    "SQL",
    "Apache Spark",
    "Hadoop",
    "Kafka",
    "Airflow",
    "Databricks",
    "ETL Pipelines",
    "Snowflake",
    "Redshift",
    "BigQuery",
    "Data Warehousing",
    "Delta Lake",
    "Data Lakehouse Architectures",
    "Scala",
    "Python (PySpark)",
    "Streaming Data Processing",
    "Cloud Data Platforms (AWS/GCP/Azure)",
  ],

  ai_ml: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Transformers",
    "BERT/GPT Models",
    "Computer Vision (OpenCV, YOLO)",
    "Reinforcement Learning",
    "GANs",
    "Neural Network Optimization",
    "Hyperparameter Tuning",
    "MLOps",
    "Model Deployment (SageMaker, Vertex AI)",
    "ONNX",
    "NLP Toolkits (spaCy, NLTK, Hugging Face)",
    "Bayesian Models",
  ],

  nlp: [
    "Transformers (BERT, GPT, RoBERTa)",
    "spaCy",
    "NLTK",
    "Hugging Face",
    "Seq2Seq Models",
    "Attention Mechanisms",
    "Named Entity Recognition (NER)",
    "Sentiment Analysis",
    "Word Embeddings (Word2Vec, GloVe)",
    "Speech-to-Text Systems",
    "Text-to-Speech (TTS)",
    "Transformer Fine-tuning",
    "Large Language Models (LLMs)",
    "Prompt Engineering",
  ],

  computer_vision: [
    "OpenCV",
    "YOLO",
    "TensorFlow",
    "PyTorch",
    "CNN Architectures",
    "Image Segmentation",
    "Object Detection",
    "Face Recognition",
    "GANs for Vision",
    "Transformer Vision Models (ViT)",
    "3D Vision",
    "Medical Imaging",
    "Augmented Reality",
    "Real-time Image Processing",
  ],

  cloud_computing: [
    "AWS",
    "Azure",
    "Google Cloud",
    "Serverless Architectures",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Cloud Networking",
    "Cloud Security",
    "Cloud Databases",
    "CI/CD Pipelines",
    "Monitoring & Logging (CloudWatch, Stackdriver)",
    "Load Balancing",
    "Multi-Cloud Strategies",
  ],

  devops: [
    "Linux",
    "Docker",
    "Kubernetes",
    "CI/CD (Jenkins, GitHub Actions)",
    "Terraform",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Helm",
    "Istio",
    "AWS/GCP/Azure DevOps Tools",
    "Monitoring & Observability",
    "Infrastructure as Code (IaC)",
    "Secrets Management (Vault, KMS)",
  ],

  cybersecurity: [
    "Penetration Testing",
    "Network Security",
    "Cloud Security",
    "Cryptography",
    "Ethical Hacking",
    "Malware Analysis",
    "Incident Response",
    "Zero Trust Architectures",
    "SIEM Tools (Splunk, ELK)",
    "Firewalls & IDS/IPS",
    "Threat Modeling",
    "Reverse Engineering",
    "Application Security (OWASP Top 10)",
  ],

  systems_admin: [
    "Linux Administration",
    "Windows Server",
    "Shell Scripting",
    "Active Directory",
    "Virtualization (VMware, Hyper-V)",
    "Networking (TCP/IP, DNS, DHCP)",
    "Cloud Infrastructure",
    "Backup & Disaster Recovery",
    "Monitoring Tools (Nagios, Zabbix)",
    "Configuration Management",
  ],

  ui_ux: [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Interaction Design",
    "Design Systems",
    "Accessibility Standards (WCAG)",
    "Motion Design",
    "Usability Testing",
    "Visual Design Principles",
    "Responsive UI Design",
  ],

  product_mgmt: [
    "Agile Methodologies",
    "Scrum Framework",
    "Roadmap Planning",
    "Jira",
    "Stakeholder Management",
    "KPI Definition",
    "A/B Testing",
    "Market Research",
    "Product Analytics",
    "Go-to-Market Strategy",
    "User Story Mapping",
    "OKRs",
  ],

  project_mgmt: [
    "Agile Project Management",
    "Scrum / Kanban",
    "MS Project",
    "Jira / Trello",
    "Risk Management",
    "Resource Planning",
    "Stakeholder Communication",
    "Budgeting & Forecasting",
    "Change Management",
    "Lean Project Management",
  ],

  digital_marketing: [
    "SEO",
    "SEM",
    "Google Analytics",
    "Google Ads",
    "Facebook Ads Manager",
    "Content Strategy",
    "Email Marketing (HubSpot, Mailchimp)",
    "Conversion Rate Optimization (CRO)",
    "Influencer Marketing",
    "Social Media Analytics",
    "Affiliate Marketing",
    "A/B Testing",
  ],
};

// DOM elements
const resumeFileInput = document.getElementById("resumeFile")
const careerDomainSelect = document.getElementById("careerDomain")
const analyzeBtn = document.getElementById("analyzeBtn")
const analyzeText = document.getElementById("analyzeText")
const loadingSpinner = document.getElementById("loadingSpinner")
const resumePreview = document.getElementById("resumePreview")
const resumeText = document.getElementById("resumeText")
const resultsSection = document.getElementById("resultsSection")
const errorMessage = document.getElementById("errorMessage")
const errorText = document.getElementById("errorText")

// Result elements
const mentorMessage = document.getElementById("mentorMessage")
const readinessPercent = document.getElementById("readinessPercent")
const readinessBar = document.getElementById("readinessBar")
const presentSkills = document.getElementById("presentSkills")
const missingSkills = document.getElementById("missingSkills")
const saveSessionBtn = document.getElementById("saveSessionBtn")
const savedSessions = document.getElementById("savedSessions")

// Global variables
let parsedResumeText = ""
let currentAnalysis = null

// External libraries
const pdfjsLib = window["pdfjs-dist/build/pdf"]
const mammoth = window["mammoth"]

// Event listeners
resumeFileInput.addEventListener("change", handleFileUpload)
careerDomainSelect.addEventListener("change", checkFormValidity)
analyzeBtn.addEventListener("click", analyzeResume)
saveSessionBtn.addEventListener("click", saveSession)

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  loadSavedSessions()
  checkFormValidity()
})

/**
 * Handle file upload and parse resume content
 */
async function handleFileUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  hideError()
  showLoading("Parsing resume...")

  try {
    const fileExtension = file.name.split(".").pop().toLowerCase()

    switch (fileExtension) {
      case "pdf":
        parsedResumeText = await parsePDF(file)
        break
      case "docx":
        parsedResumeText = await parseDocx(file)
        break
      case "txt":
        parsedResumeText = await parseTxt(file)
        break
      default:
        throw new Error("Unsupported file format. Please use PDF, DOCX, or TXT files.")
    }

    // Show preview
    resumeText.textContent = parsedResumeText.substring(0, 1000) + (parsedResumeText.length > 1000 ? "..." : "")
    resumePreview.classList.remove("hidden")

    checkFormValidity()
    hideLoading()
  } catch (error) {
    showError(`Error parsing resume: ${error.message}`)
    hideLoading()
  }
}

/**
 * Parse PDF file using PDF.js
 */
async function parsePDF(file) {
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
  let text = ""

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const textContent = await page.getTextContent()
    const pageText = textContent.items.map((item) => item.str).join(" ")
    text += pageText + "\n"
  }

  return text.trim()
}

/**
 * Parse DOCX file using Mammoth.js
 */
async function parseDocx(file) {
  const arrayBuffer = await file.arrayBuffer()
  const result = await mammoth.extractRawText({ arrayBuffer })
  return result.value.trim()
}

/**
 * Parse TXT file
 */
async function parseTxt(file) {
  return await file.text()
}

/**
 * Check if form is valid and enable/disable analyze button
 */
function checkFormValidity() {
  const hasFile = resumeFileInput.files.length > 0 && parsedResumeText
  const hasDomain = careerDomainSelect.value

  analyzeBtn.disabled = !(hasFile && hasDomain)
}

/**
 * Analyze resume using AI
 */
async function analyzeResume() {
  if (!parsedResumeText || !careerDomainSelect.value) return

  hideError()
  showLoading("Analyzing resume with AI...")

  try {
    const domain = careerDomainSelect.value
    const requiredSkills = skillsData[domain]

    // Create strict AI prompt
    const prompt = `You are a professional career mentor AI. Analyze this resume for the selected career domain.

Resume Text: ${parsedResumeText}

Career Domain: ${getDomainName(domain)}

Required Skills: ${requiredSkills.join(", ")}

IMPORTANT: Return ONLY a valid JSON response in this exact format (no additional text, explanations, or formatting):

{
  "present_skills": ["skill1", "skill2", ...],
  "missing_skills": ["skill3", "skill4", ...],
  "readiness": 85,
  "mentor_message": "Detailed feedback message here..."
}

Instructions:
1. Analyze the resume text to identify which required skills are present
2. List missing skills that would be valuable for this career domain
3. Calculate readiness percentage (0-100) based on skill coverage and experience
4. Provide a personalized mentor message with actionable advice
5. Ensure the response is valid JSON only`

    // Call backend API instead of direct OpenAI
    const response = await callBackendAPI(prompt)

    if (response && typeof response === "object" && response.present_skills) {
      currentAnalysis = {
        ...response,
        domain: domain,
        timestamp: new Date().toISOString(),
        resumePreview: parsedResumeText.substring(0, 500),
      }

      displayResults(response)
    } else {
      throw new Error("Invalid response from analysis service")
    }
  } catch (error) {
    console.error("Analysis error:", error)
    showError(`Analysis failed: ${error.message}`)
    
    // Fallback to mock analysis if API fails
    try {
      const fallbackResponse = await generateFallbackAnalysis()
      currentAnalysis = {
        ...fallbackResponse,
        domain: careerDomainSelect.value,
        timestamp: new Date().toISOString(),
        resumePreview: parsedResumeText.substring(0, 500),
      }
      displayResults(fallbackResponse)
    } catch (fallbackError) {
      showError("Unable to analyze resume. Please try again later.")
    }
  } finally {
    hideLoading()
  }
}

/**
 * Call backend API endpoint
 */
async function callBackendAPI(prompt) {
  try {
    const response = await fetch("/api/openai1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Backend API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    
    if (data.error) {
      throw new Error(`API Error: ${data.error}`)
    }

    // Extract the content from OpenAI response
    const aiResponse = data.choices?.[0]?.message?.content?.trim()
    
    if (!aiResponse) {
      throw new Error("Empty response from AI service")
    }

    // Parse JSON response
    try {
      const parsedResponse = JSON.parse(aiResponse)
      
      // Validate required fields
      if (!parsedResponse.present_skills || !parsedResponse.missing_skills || 
          typeof parsedResponse.readiness !== 'number' || !parsedResponse.mentor_message) {
        throw new Error("Invalid response structure from AI")
      }
      
      return parsedResponse
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", aiResponse)
      throw new Error("Invalid JSON response from AI service")
    }
  } catch (error) {
    console.error("Backend API call failed:", error)
    throw error
  }
}

/**
 * Generate fallback analysis when API fails
 */
async function generateFallbackAnalysis() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const domain = careerDomainSelect.value
  const allSkills = skillsData[domain]

  // Simulate skill detection
  const resumeLower = parsedResumeText.toLowerCase()
  const presentSkills = allSkills.filter(
    (skill) =>
      resumeLower.includes(skill.toLowerCase()) || 
      resumeLower.includes(skill.toLowerCase().replace(/[/\-\s]/g, ""))
  )

  const missingSkills = allSkills.filter((skill) => !presentSkills.includes(skill))
  const readiness = Math.min(95, Math.max(20, Math.round((presentSkills.length / allSkills.length) * 100)))

  const mentorMessages = {
    frontend: `Great frontend skills! You have ${presentSkills.length} out of ${allSkills.length} key skills. Strengthen performance optimization, accessibility, and testing practices to stand out.`,
    backend: `Strong backend foundation! You cover ${presentSkills.length} skills. Focus on distributed systems, advanced databases, and scalability for career growth.`,
    fullstack: `Solid fullstack knowledge! ${presentSkills.length} out of ${allSkills.length} skills matched. Deepen your expertise in DevOps and cloud deployment to complete the stack.`,
    mobile_dev: `Good progress in mobile app development! You demonstrate ${presentSkills.length} skills. Strengthen cross-platform optimization and store workflows.`,
    game_dev: `Exciting game dev skills! ${presentSkills.length} out of ${allSkills.length}. Boost your shader programming, AR/VR, and optimization to level up.`,
    blockchain: `Strong blockchain foundation! ${presentSkills.length} skills identified. Deepen your understanding of security and scalability for real-world dApps.`,
    embedded_systems: `Good start in embedded systems! ${presentSkills.length} of ${allSkills.length} skills found. Focus on RTOS, IoT security, and low-power design for next steps.`,
    data_science: `Solid data science background! ${presentSkills.length} essential skills. Consider expanding into advanced statistics and ML integration.`,
    data_engineering: `Promising data engineering profile! ${presentSkills.length} skills detected. Strengthen your streaming and pipeline orchestration for big data workflows.`,
    ai_ml: `Strong AI/ML foundation! ${presentSkills.length} critical skills. Focus on model deployment, optimization, and MLOps to grow.`,
    nlp: `Nice NLP experience! ${presentSkills.length} skills recognized. Enhance transformer fine-tuning and large language model techniques.`,
    computer_vision: `Great start in computer vision! ${presentSkills.length} of ${allSkills.length}. Expand with real-time processing and transformer vision models.`,
    cloud_computing: `Cloud skills are solid! ${presentSkills.length} matched. Grow in multi-cloud strategies, IaC, and advanced monitoring.`,
    devops: `DevOps skills are developing well! ${presentSkills.length} skills found. Focus on observability, IaC, and container orchestration.`,
    cybersecurity: `Good cybersecurity foundation! ${presentSkills.length} of ${allSkills.length}. Deepen your penetration testing, zero trust, and cloud security knowledge.`,
    systems_admin: `Solid system admin base! ${presentSkills.length} skills. Expand into automation, cloud infra, and monitoring for modern ops roles.`,
    ui_ux: `Creative UI/UX skills! ${presentSkills.length} matched. Strengthen accessibility, design systems, and usability testing.`,
    product_mgmt: `Strong product management basics! ${presentSkills.length} skills covered. Deepen stakeholder management and product analytics.`,
    project_mgmt: `Solid project management background! ${presentSkills.length} of ${allSkills.length}. Enhance your agile leadership and risk management skills.`,
    digital_marketing: `Good digital marketing expertise! ${presentSkills.length} skills matched. Expand into CRO, influencer marketing, and data-driven campaigns.`,
  }

  return {
    present_skills: presentSkills,
    missing_skills: missingSkills.slice(0, 10),
    readiness: readiness,
    mentor_message: mentorMessages[domain] || `You have ${presentSkills.length} relevant skills. Continue building expertise in this domain.`,
  }
}

/**
 * Display analysis results
 */
function displayResults(analysis) {
  // Show mentor message
  mentorMessage.textContent = analysis.mentor_message

  // Update readiness bar
  readinessPercent.textContent = `${analysis.readiness}%`
  setTimeout(() => {
    readinessBar.style.width = `${analysis.readiness}%`
  }, 100)

  // Display present skills
  presentSkills.innerHTML = ""
  if (analysis.present_skills && analysis.present_skills.length > 0) {
    analysis.present_skills.forEach((skill) => {
      const skillTag = createSkillTag(skill, "green")
      presentSkills.appendChild(skillTag)
    })
  } else {
    presentSkills.innerHTML = '<span class="text-slate-400 italic">No matching skills detected</span>'
  }

  // Display missing skills
  missingSkills.innerHTML = ""
  if (analysis.missing_skills && analysis.missing_skills.length > 0) {
    analysis.missing_skills.forEach((skill) => {
      const skillTag = createSkillTag(skill, "red")
      missingSkills.appendChild(skillTag)
    })
  } else {
    missingSkills.innerHTML = '<span class="text-slate-400 italic">All skills covered!</span>'
  }

  // Show results section
  resultsSection.classList.remove("hidden")
  resultsSection.scrollIntoView({ behavior: "smooth" })
}

/**
 * Create skill tag element
 */
function createSkillTag(skill, color) {
  const tag = document.createElement("span")
  const colorClasses = {
    green: "bg-green-900 text-green-200 border-green-700",
    red: "bg-red-900 text-red-200 border-red-700",
  }

  tag.className = `px-3 py-1 rounded-full text-sm border ${colorClasses[color]} transition-all duration-200 hover:scale-105`
  tag.textContent = skill
  return tag
}

/**
 * Save analysis session to localStorage
 */
function saveSession() {
  if (!currentAnalysis) return

  const sessions = JSON.parse(localStorage.getItem("resumeAnalysisSessions") || "[]")
  const sessionId = Date.now().toString()

  const session = {
    id: sessionId,
    ...currentAnalysis,
    savedAt: new Date().toISOString(),
  }

  sessions.unshift(session) // Add to beginning
  sessions.splice(5) // Keep only last 5 sessions

  localStorage.setItem("resumeAnalysisSessions", JSON.stringify(sessions))

  // Show success message
  showSuccess("Analysis session saved successfully!")
  loadSavedSessions()
}

/**
 * Load and display saved sessions
 */
function loadSavedSessions() {
  const sessions = JSON.parse(localStorage.getItem("resumeAnalysisSessions") || "[]")

  if (sessions.length === 0) {
    savedSessions.innerHTML = ""
    return
  }

  const sessionsHTML = `
    <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 class="text-lg font-semibold mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Recent Analysis Sessions
        </h3>
        <div class="space-y-3">
            ${sessions
              .map(
                (session) => `
                <div class="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <div class="flex justify-between items-start mb-2">
                        <span class="font-medium text-blue-400">${getDomainName(session.domain)}</span>
                        <span class="text-sm text-slate-400">${new Date(session.savedAt).toLocaleDateString()}</span>
                    </div>
                    <div class="text-sm text-slate-300 mb-2">Readiness: ${session.readiness}%</div>
                    <div class="text-xs text-slate-400">${session.resumePreview}...</div>
                    <button onclick="deleteSession('${session.id}')" class="mt-2 text-red-400 hover:text-red-300 text-xs">Delete</button>
                </div>
            `,
              )
              .join("")}
        </div>
    </div>
  `

  savedSessions.innerHTML = sessionsHTML
}

/**
 * Delete a saved session
 */
function deleteSession(sessionId) {
  const sessions = JSON.parse(localStorage.getItem("resumeAnalysisSessions") || "[]")
  const filteredSessions = sessions.filter((session) => session.id !== sessionId)
  localStorage.setItem("resumeAnalysisSessions", JSON.stringify(filteredSessions))
  loadSavedSessions()
}

/**
 * Get human-readable domain name
 */
function getDomainName(domain) {
  const names = {
    frontend: "Frontend Development",
    backend: "Backend Development", 
    fullstack: "Full Stack Development",
    mobile_dev: "Mobile Development",
    game_dev: "Game Development",
    blockchain: "Blockchain Development",
    embedded_systems: "Embedded Systems",
    data_science: "Data Science",
    data_engineering: "Data Engineering",
    ai_ml: "AI/Machine Learning",
    nlp: "Natural Language Processing",
    computer_vision: "Computer Vision",
    cloud_computing: "Cloud Computing",
    devops: "DevOps",
    cybersecurity: "Cybersecurity",
    systems_admin: "Systems Administration",
    ui_ux: "UI/UX Design",
    product_mgmt: "Product Management",
    project_mgmt: "Project Management",
    digital_marketing: "Digital Marketing",
  }
  return names[domain] || domain.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

/**
 * Show loading state
 */
function showLoading(message = "Loading...") {
  analyzeText.textContent = message
  loadingSpinner.classList.remove("hidden")
  analyzeBtn.disabled = true
}

/**
 * Hide loading state
 */
function hideLoading() {
  analyzeText.textContent = "Analyze Resume"
  loadingSpinner.classList.add("hidden")
  checkFormValidity()
}

/**
 * Show error message
 */
function showError(message) {
  errorText.textContent = message
  errorMessage.classList.remove("hidden")
  setTimeout(() => {
    errorMessage.classList.add("hidden")
  }, 5000)
}

/**
 * Hide error message
 */
function hideError() {
  errorMessage.classList.add("hidden")
}

/**
 * Show success message
 */
function showSuccess(message) {
  // Create temporary success message
  const successDiv = document.createElement("div")
  successDiv.className =
    "fixed top-4 right-4 bg-green-900 border border-green-700 text-green-200 px-4 py-3 rounded-lg z-50 transition-all duration-300"
  successDiv.innerHTML = `
    <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${message}</span>
    </div>
  `

  document.body.appendChild(successDiv)

  setTimeout(() => {
    successDiv.remove()
  }, 3000)
}

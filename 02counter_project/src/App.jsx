import React, { useState, useEffect, useRef } from "react";

export default function FarmerAssistanceApp() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isListening, setIsListening] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: "28°C",
    humidity: "65%",
    rainfall: "10mm",
    forecast: "Partly Cloudy",
  });

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice input (2 seconds)
      setTimeout(() => {
        const sampleQuestion = "What are the best organic practices for wheat cultivation?";
        setUserInput(sampleQuestion);
        setIsListening(false);
        handleSendMessage(sampleQuestion);
      }, 2000);
    }
  };

  const handleSendMessage = (message) => {
    const userMessage = typeof message === "string" ? message : userInput;
    if (!userMessage || !userMessage.trim()) return;

    const newMessages = [...chatMessages, { role: "user", content: userMessage }];
    setChatMessages(newMessages);
    setUserInput("");

    // Simulate AI response after 1s
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage);
      setChatMessages((prev) => [...newMessages, { role: "assistant", content: aiResponse }]);
    }, 1000);
  };

  const generateAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("organic")) {
      return (
        "For organic farming practices:\n\n" +
        "🌱 Organic Suggestions:\n" +
        "- Use neem-based pesticides for pest control\n" +
        "- Implement crop rotation with legumes\n" +
        "- Apply compost and green manure\n" +
        "- Use biological control methods\n" +
        "- Maintain soil health with organic matter\n\n" +
        "Recommended for sustainable farming and better soil health long-term."
      );
    }

    if (lowerQuestion.includes("inorganic")) {
      return (
        "For conventional farming practices:\n\n" +
        "🔬 Inorganic Suggestions:\n" +
        "- Use recommended chemical fertilizers (NPK)\n" +
        "- Apply synthetic pesticides as needed\n" +
        "- Follow scheduled fertilizer application\n" +
        "- Use hybrid seeds for higher yield\n" +
        "- Implement modern irrigation systems\n\n" +
        "Provides faster results and higher yields but requires careful management."
      );
    }

    if (lowerQuestion.includes("weather") || lowerQuestion.includes("rain")) {
      return (
        `Current weather in your region:\n` +
        `🌤 Temperature: ${weatherData.temperature}\n` +
        `💧 Humidity: ${weatherData.humidity}\n` +
        `🌧 Rainfall: ${weatherData.rainfall}\n` +
        `📊 Forecast: ${weatherData.forecast}\n\n` +
        `Good conditions for planting this week!`
      );
    }

    if (lowerQuestion.includes("soil") || lowerQuestion.includes("test")) {
      return (
        "Based on common soil patterns in your region:\n\n" +
        "🧪 Soil Health Report:\n" +
        "- pH Level: 6.8 (Optimal)\n" +
        "- Nitrogen: Medium\n" +
        "- Phosphorus: Low\n" +
        "- Potassium: High\n" +
        "- Organic Matter: 2.5%\n\n" +
        "Recommendation: Add phosphorus-rich organic fertilizer."
      );
    }

    if (lowerQuestion.includes("price") || lowerQuestion.includes("market")) {
      return (
        "📈 Current Market Prices:\n" +
        "- Wheat: ₹2,100 per quintal\n" +
        "- Rice: ₹1,950 per quintal\n" +
        "- Cotton: ₹6,500 per quintal\n" +
        "- Soybean: ₹4,200 per quintal\n" +
        "- Sugarcane: ₹315 per quintal\n\n" +
        "Prices are stable this week."
      );
    }

    // Default help response
    return (
      "I understand you're asking about farming. I can help with:\n" +
      "- Organic and inorganic farming methods\n" +
      "- Weather updates and forecasts\n" +
      "- Soil testing and recommendations\n" +
      "- Pest and disease management\n" +
      "- Government schemes information\n" +
      "- Market prices and trends\n" +
      "- Farm machinery services\n\n" +
      "Try asking: 'Organic practices for wheat?' or 'Weather forecast?'"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-green-700 text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">🌾 Krishi Sahayak</h1>
            <p className="text-green-200">Farmer's Digital Assistant</p>
          </div>
          <nav className="space-x-2">
            {["dashboard", "chat", "weather", "market"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab ? "bg-white text-green-700" : "bg-transparent hover:bg-green-600/20"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Weather Card */}
            <div className="bg-blue-50 rounded-2xl p-5 shadow">
              <h3 className="text-lg font-semibold">🌤 Weather Update</h3>
              <p className="text-sm text-gray-600">Current conditions</p>
              <div className="mt-3 space-y-1">
                <p>Temperature: {weatherData.temperature}</p>
                <p>Humidity: {weatherData.humidity}</p>
                <p>Rainfall: {weatherData.rainfall}</p>
                <p>Forecast: {weatherData.forecast}</p>
              </div>
            </div>

            {/* Soil Testing */}
            <div className="bg-amber-50 rounded-2xl p-5 shadow">
              <h3 className="text-lg font-semibold">🧪 Soil Health</h3>
              <p className="text-sm text-gray-600">Get soil tested</p>
              <div className="mt-3 space-y-3">
                <label className="block text-sm font-medium">Select Crop</label>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="w-full rounded-md border p-2"
                >
                  <option value="">Choose crop</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                </select>
                <button className="w-full bg-green-700 text-white rounded-md py-2">Get Soil Report</button>
              </div>
            </div>

            {/* Market Prices */}
            <div className="bg-green-50 rounded-2xl p-5 shadow">
              <h3 className="text-lg font-semibold">📈 Market Prices</h3>
              <p className="text-sm text-gray-600">Current rates</p>
              <div className="mt-3 space-y-1">
                <p>Wheat: ₹2,100/qtl</p>
                <p>Rice: ₹1,950/qtl</p>
                <p>Cotton: ₹6,500/qtl</p>
                <button className="w-full border border-green-700 rounded-md py-2 mt-3">View All Prices</button>
              </div>
            </div>

            {/* Government Schemes */}
            <div className="bg-purple-50 rounded-2xl p-5 shadow">
              <h3 className="text-lg font-semibold">🏛 Government Schemes</h3>
              <p className="text-sm text-gray-600">Available benefits</p>
              <div className="mt-3 space-y-1">
                <p>• PM-KISAN Scheme</p>
                <p>• Soil Health Card</p>
                <p>• Crop Insurance</p>
                <button className="w-full border border-purple-700 rounded-md py-2 mt-3">Learn More</button>
              </div>
            </div>

            {/* Machinery Services */}
            <div className="bg-red-50 rounded-2xl p-5 shadow">
              <h3 className="text-lg font-semibold">🚜 Farm Machinery</h3>
              <p className="text-sm text-gray-600">Rent equipment</p>
              <div className="mt-3 space-y-1">
                <p>• Tractors</p>
                <p>• Harvesters</p>
                <p>• Irrigation Systems</p>
                <button className="w-full border border-red-700 rounded-md py-2 mt-3">Browse Equipment</button>
              </div>
            </div>

            {/* Expert Help */}
            <div className="bg-teal-50 rounded-2xl p-5 shadow">
              <h3 className="text-lg font-semibold">👨‍🌾 Expert Assistance</h3>
              <p className="text-sm text-gray-600">24/7 support</p>
              <div className="mt-3 space-y-1">
                <p>Connect with agricultural experts</p>
                <p>Get personalized advice</p>
                <button
                  className="w-full bg-green-700 text-white rounded-md py-2 mt-2"
                  onClick={() => setActiveTab("chat")}
                >
                  Chat Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat */}
        {activeTab === "chat" && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow p-5">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">💬 AI Farming Assistant</h2>
                <p className="text-sm text-gray-600">Ask anything about farming — get organic and inorganic solutions</p>
              </div>

              {/* Chat messages */}
              <div
                ref={chatContainerRef}
                className="h-96 overflow-y-auto p-4 bg-gray-50 rounded-lg mb-4"
              >
                {chatMessages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <p>Ask me about farming practices, weather, soil health, or market prices!</p>
                    <p>I'll provide both organic and inorganic solutions.</p>
                  </div>
                ) : (
                  chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 p-3 rounded-lg max-w-[85%] ${
                        message.role === "user"
                          ? "bg-green-700 text-white ml-auto"
                          : "bg-white text-gray-800 mr-auto border"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Input area */}
              <div className="flex space-x-2">
                <input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask about farming practices..."
                  className="flex-1 rounded-md border p-2"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleVoiceInput}
                  className={`px-4 py-2 rounded-md border ${
                    isListening ? "bg-red-500 text-white" : "bg-transparent"
                  }`}
                >
                  {isListening ? "Listening..." : "🎤 Voice"}
                </button>
                <button onClick={() => handleSendMessage()} className="px-4 py-2 rounded-md bg-green-700 text-white">
                  Send
                </button>
              </div>

              {/* Quick questions */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  className="border rounded-md py-2"
                  onClick={() => handleSendMessage("Organic practices for wheat?")}
                >
                  🌱 Organic Wheat
                </button>
                <button className="border rounded-md py-2" onClick={() => handleSendMessage("Inorganic pest control?")}>
                  Pest Control
                </button>
                <button className="border rounded-md py-2" onClick={() => handleSendMessage("Weather forecast?")}>
                  🌤 Weather
                </button>
                <button className="border rounded-md py-2" onClick={() => handleSendMessage("Soil testing advice?")}>
                  Soil Health
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Weather Tab */}
        {activeTab === "weather" && (
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-lg font-semibold">🌤 Detailed Weather</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">Select Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full rounded-md border p-2"
                >
                  <option value="">Choose region</option>
                  <option value="north">North Region</option>
                  <option value="south">South Region</option>
                  <option value="east">East Region</option>
                  <option value="west">West Region</option>
                </select>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/300x200?text=Weather+Map"
                  alt="Weather forecast map"
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Market Tab */}
        {activeTab === "market" && (
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-lg font-semibold">📈 Market Prices</h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Crop</th>
                    <th className="p-2">Price/Quintal</th>
                    <th className="p-2">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Wheat</td>
                    <td className="p-2">₹2,100</td>
                    <td className="p-2 text-green-600">↑ 2%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Rice</td>
                    <td className="p-2">₹1,950</td>
                    <td className="p-2 text-green-600">↑ 1%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Cotton</td>
                    <td className="p-2">₹6,500</td>
                    <td className="p-2 text-red-600">↓ 3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p>🌾 Krishi Sahayak - Farmer's Digital Assistant</p>
          <p className="text-green-200">Get expert farming advice anytime, anywhere</p>
          <div className="mt-4 space-x-4">
            <button className="border rounded-md px-3 py-2">Contact</button>
            <button className="border rounded-md px-3 py-2">Help</button>
            <button className="border rounded-md px-3 py-2">About</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

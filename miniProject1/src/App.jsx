import React from "react";
import JobCards from "./components/JobCards";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      role: "Full Time",
      mode: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "SDE - Backend",
      role: "Full Time",
      mode: "Senior Level",
      pay: "$72/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      role: "Remote",
      mode: "Junior Level",
      pay: "$58/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      role: "Full Time",
      mode: "Senior Level",
      pay: "$80/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      role: "Full Time",
      mode: "Mid Level",
      pay: "$70/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "Data Engineer",
      role: "Contract",
      mode: "Senior Level",
      pay: "$90/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "12 days ago",
      post: "AI Engineer",
      role: "Full Time",
      mode: "Mid Level",
      pay: "$75/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "ML Engineer",
      role: "Full Time",
      mode: "Senior Level",
      pay: "$85/hr",
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "1 week ago",
      post: "Database Engineer",
      role: "Full Time",
      mode: "Junior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqzXb0frYPXslo6raQm6Jaw5Nhp46A94orw&s",
      companyName: "Adobe",
      datePosted: "9 days ago",
      post: "UI/UX Engineer",
      role: "Part Time",
      mode: "Mid Level",
      pay: "$50/hr",
      location: "Noida, India",
    },
  ];

return (
    <div className="all">
      {jobOpenings.map((elem, idx) => (
        <JobCards
          key={idx}
          brandLogo={elem.brandLogo}
          companyName={elem.companyName}
          datePosted={elem.datePosted}
          post={elem.post}
          role={elem.role}
          mode={elem.mode}
          pay={elem.pay}
          location={elem.location}
        />
      ))}
    </div>
  );
};

export default App;

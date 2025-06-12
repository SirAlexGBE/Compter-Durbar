import React from "react";

const Introduction = () => {
  const title = "Introduction";
  const description =
    "Finding an affordable yet capable laptop is crucial for students in Nepal. Whether you're working on assignments, research projects, or online classes, the right device can significantly enhance productivity. With so many options available, choosing the best budget laptop can be challenging. This guide will help you find the best budget laptops for students in Nepal in 2024, covering different price ranges to match various academic needs.";

  const subTitle = "Key Factors to Consider Before Buying a Student Laptop";
  const subText = "Before choosing a laptop, consider these essential factors:";

  const points = [
    {
      title: "1. Performance and Processor",
      content:
        "For smooth operation, opt for at least an Intel Core i3, AMD Ryzen 3, or higher. If your studies involve video editing, programming, or design, go for Intel Core i5/i7 or AMD Ryzen 5/7.",
    },
    {
      title: "2. RAM & Storage",
      content: (
        <ul className="list-disc ml-5 space-y-1">
          <li>8GB RAM is the minimum for multitasking.</li>
          <li>
            256GB SSD or higher ensures faster boot-up and application loading.
          </li>
        </ul>
      ),
    },
    {
      title: "3. Display & Portability",
      content:
        "A 14-inch or 15.6-inch Full HD (1080p) display is ideal for clear visuals. If you move frequently, a lightweight design is a bonus.",
    },
    {
      title: "4. Battery Life",
      content:
        "A laptop with 6+ hours of battery backup is essential for attending classes without frequent charging.",
    },
    {
      title: "5. Budget Considerations",
      content:
        "Prioritize a laptop that fits your needs without overspending. This guide includes budget, mid-range, and high-performance options under NPR 150,000.",
    },
  ];

  return (
    <div className="  mx-auto px-20 py-10 text-gray-800 dark:text-gray-50">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-base leading-relaxed mb-6">{description}</p>

      <h2 className="text-xl font-semibold mb-2">{subTitle}</h2>
      <p className="mb-4">{subText}</p>

      <div className="space-y-5">
        {points.map((point, index) => (
          <div key={index}>
            <h3 className="font-semibold">{point.title}</h3>
            <div className="text-sm mt-1">{point.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;

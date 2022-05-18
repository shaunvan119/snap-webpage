export const menuItems = [
  
  {
    title: "Features",
    url: "/services",
    submenu: [
      {
        title: "Todo List",
        url: "/web-design",
      },
      {
        title: "Calender",
        url: "/web-dev",
        submenu: [
          {
            title: "Frontend",
            url: "/frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "/node",
              },
              {
                title: "PHP",
                url: "/php",
              },
            ],
          },
        ],
      },
      {
        title: "Reminders",
        url: "/seo",
      },
      {
        title: "Planning",
        url: "/seo",
      },
    ],
  },
  {
    title: "Company",
    // url: "/about",
    submenu: [
      {
        title: "Who we are",
        url: "/who-we-are",
      },
      {
        title: "Our values",
        url: "/our-values",
      },
    ],
  },
  {
    title: "Careers",
    url: "/",
  },
  {
    title: "About",
    url: "/",
  },
];

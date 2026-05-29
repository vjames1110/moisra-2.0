import {
  FaLaptopCode,
  FaUsers,
  FaHardHat,
  FaTruck,
  FaCog,
  FaIndustry,
  FaMoneyBill,
  FaCalculator
} from "react-icons/fa";

export const servicesData = [
  { icon: FaLaptopCode,
    title: "IT Solutions",
    description: "Software Development, ERP Implementation and digital transformation.",
    path: "/services/it-solutions",
    items: [
      "Software Development",
      "ERP Solutions",
      "Cloud Services",
      "IT Consulting"
    ]
  },

  { icon: FaUsers,
    title: "Workforce Solutions",
    description: "End to End Solution for all types of Workforce required in a Construction domain.",
    path: "/services/workforce-solutions",
    items: [
      "Recruitment",
      "Contract Staffing",
      "Training",
      "Placement"
    ]
  },

  { icon: FaHardHat,
    title: "Civil & Construction",
    description: "Complete civil solutions at your door step.",
    path: "/services/civil-construction",
    items: [
      "Civil Contracts",
      "Infrastructure",
      "Project Execution",
      "Site Management"
    ]
  },

  { icon: FaCog,
    title: "Machinery & Equipment",
    description: "Whether its HMC or LMV MOISRA has all mechanical solutions.",
    path: "/services/machinery-equipment",
    items: [
      "Rental",
      "Maintenance",
      "Procurement",
      "Sale & Purchase"
    ]
  },

  { icon: FaTruck,
    title: "Transportation & Logistics",
    description: "Delivering complete transport and logistics solutions at your finger tip.",
    path: "/services/transportation-logistics",
    items: [
      "Fleet Management",
      "Material Transport",
      "Route Planning",
      "Logistics Support"
    ]
  },

  { icon: FaIndustry,
    title: "Industrial Supplies",
    description: "Complete Industrial supplies.",
    path: "/services/industrial-supplies",
    items: [
      "Consumables",
      "Safety Equipment",
      "Procurement",
      "Industrial Goods"
    ]
  },

  { icon: FaMoneyBill,
    title: "Finance & Insurance",
    description: "All finance and insurance related solutions.",
    path: "/services/finance-insurance",
    items: [
      "Loans",
      "Project Finance",
      "Insurance",
      "Advisory"
    ]
  },

  { icon: FaCalculator,
    title: "Accounts & Taxation",
    description: "Audit, Analysis and complete accounting solutions.",
    path: "/services/accounts-taxation",
    items: [
      "GST",
      "Accounting",
      "Tax Planning",
      "Compliance"
    ]
  }
];
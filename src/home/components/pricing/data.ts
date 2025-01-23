const data = [
  {
    type: "basic",
    cpu: "CPU Shared",
    price: 4,
    billingCycle: "Pe termen de 24 de luni",
    features: [
      { value: "1", unit: "vCPU" },
      { value: "2 GB", unit: "RAM ECC" },
      { value: "20 GB", unit: "NVMe HA" },
      { value: "10 TB", unit: "Transfer" },
    ],
    isPopular: false,
  },
  {
    type: "Pro",
    cpu: "CPU Dedicat",
    price: 10,
    billingCycle: "Pe termen de 24 de luni",
    features: [
      { value: "4", unit: "vCPU dedicate" },
      { value: "16 GB", unit: "RAM ECC" },
      { value: "100 GB", unit: "NVMe HA" },
      { value: "10 TB", unit: "Transfer" },
    ],
    isPopular: true,
  },
  {
    type: "ENTERPRISE",
    cpu: "CPU Dedicat",
    price: 80,
    billingCycle: "Pe termen de 24 de luni",
    features: [
      { value: "32", unit: "vCPU" },
      { value: "128 GB", unit: "RAM ECC" },
      { value: "800 GB", unit: "NVMe HA" },
      { value: "10 TB", unit: "Transfer" },
    ],
    isPopular: false,
  },
];
export default data;

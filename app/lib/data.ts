export async function fetchLatestInvoices() {
  return [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      image_url: '/customers/amy-burns.png',
      amount: '$250',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      image_url: '/customers/balazs-orban.png',
      amount: '$180',
    },
  ];
}

export async function fetchCardData() {
  return {
    numberOfInvoices: 0,
    numberOfCustomers: 0,
    totalPendingInvoices: '$0',
    totalPaidInvoices: '$0',
  };
}

export async function fetchRevenue() {
  return [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 2300 },
    { month: 'Jun', revenue: 3200 },
    { month: 'Jul', revenue: 2800 },
    { month: 'Aug', revenue: 3000 },
    { month: 'Sep', revenue: 3500 },
    { month: 'Oct', revenue: 4000 },
    { month: 'Nov', revenue: 4200 },
    { month: 'Dec', revenue: 5000 },
  ];
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  return [
    {
      id: '1',
      customer_id: '1',
      amount: 250,
      date: '2024-01-01',
      status: 'pending',
      name: 'John Doe',
      email: 'john@example.com',
      image_url: '/customers/amy-burns.png',
    },
  ];
}
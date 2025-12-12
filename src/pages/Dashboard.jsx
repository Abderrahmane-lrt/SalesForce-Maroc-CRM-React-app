const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
         📊 Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Opportunities
            </h3>
            <p className="text-3xl font-bold text-orange-500">20</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Active Deals
            </h3>
            <p className="text-3xl font-bold text-green-500">3</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Revenue
            </h3>
            <p className="text-3xl font-bold text-blue-500">5000 DH</p>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <p className="text-gray-600"></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

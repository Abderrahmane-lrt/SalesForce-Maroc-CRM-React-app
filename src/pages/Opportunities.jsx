
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
dayjs.extend(relativeTime);

const Opportunities = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStage, setSelectedStage] = useState("all");
  const itemsPerPage = 5;
  const colorByStage = {
    prospection: "#3b82f6",
    qualification: "#eab308",
    proposition: "#f97316",
    negotiation: "#10b981",
    gagne: "#22c55e",
    perdu: "#ef4444",
  };
  const opportunities = useSelector((state) => state.opportunities);
  const dispatch = useDispatch();
  
  const filteredOpportunities = selectedStage === "all" 
    ? opportunities 
    : opportunities.filter(opp => opp.status === selectedStage);
  
  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOpportunities = filteredOpportunities.slice(startIndex, endIndex);
  
  const handleStageFilter = (stage) => {
    setSelectedStage(stage);
    setCurrentPage(1);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800">
             Opportunities
          </h1>
          <button onClick={()=>navigate('/addOpportunity')} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            + New Opportunity
          </button>
        </div>
        <div className="mb-6 flex gap-3 flex-wrap">
          <button 
            onClick={() => handleStageFilter("all")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${selectedStage === "all" ? "bg-gray-800 text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
          >
            All Stages
          </button>
          <button 
            onClick={() => handleStageFilter("prospection")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${selectedStage === "prospection" ? "text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            style={selectedStage === "prospection" ? {backgroundColor: colorByStage.prospection} : {}}
          >
            Prospection
          </button>
          <button 
            onClick={() => handleStageFilter("qualification")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${selectedStage === "qualification" ? "text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            style={selectedStage === "qualification" ? {backgroundColor: colorByStage.qualification} : {}}
          >
            Qualification
          </button>
          <button 
            onClick={() => handleStageFilter("proposition")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${selectedStage === "proposition" ? "text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            style={selectedStage === "proposition" ? {backgroundColor: colorByStage.proposition} : {}}
          >
            Proposition
          </button>
          <button 
            onClick={() => handleStageFilter("negotiation")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${selectedStage === "negotiation" ? "text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            style={selectedStage === "negotiation" ? {backgroundColor: colorByStage.negotiation} : {}}
          >
            Negotiation
          </button>
          <button 
            onClick={() => handleStageFilter("gagne")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${selectedStage === "gagne" ? "text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            style={selectedStage === "gagne" ? {backgroundColor: colorByStage.gagne} : {}}
          >
            Gagne
          </button>
          <button 
            onClick={() => handleStageFilter("perdu")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${selectedStage === "perdu" ? "text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            style={selectedStage === "perdu" ? {backgroundColor: colorByStage.perdu} : {}}
          >
            Perdu
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="border-b border-gray-200 ">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Company
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Stage
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOpportunities.length == 0 && (
                  <tr className="border-b border-gray-100">
                    <td colSpan="5" className="py-8 text-center text-gray-500">
                      No opportunities found. Create your first opportunity to
                      get started.
                    </td>
                  </tr>
                )}
                {currentOpportunities.map((item, index) => (
                  <tr key={index} className="border-b-2 border-gray-100">
                    <td className="text-left py-3 px-4 text-gray-700 capitalize font-semibold">
                      {item.entreprise}
                    </td>
                    <td className="text-left py-3 px-4 text-gray-700">
                      {item.montant}
                    </td>
                    <td className="text-left py-3 px-4 text-gray-700">
                      <span
                        style={{ backgroundColor: colorByStage[item.status] }}
                        className="px-3 py-2 font-500 text-white rounded-2xl"
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{dayjs(item.date).toString().slice(4, 17)}</td>
                    <td className="text-left  py-3 px-4 text-gray-700 flex gap-2">
                      <span class="material-symbols-outlined text-blue-700 scale-90 cursor-pointer "
                      onClick={()=> navigate(`/opportunities/${item.id}`)}>
                        visibility
                      </span>
                      
                      <span class="material-symbols-outlined text-green-700 scale-90 cursor-pointer"
                        onClick={() => navigate(`/editOpportunity/${item.id}`)}
                      >
                        edit
                      </span>
                      <span class="material-symbols-outlined text-red-700 scale-90 cursor-pointer"
                        onClick={() => {
                          if (window.confirm(`Delete opportunity "${item.entreprise}"?`)) {
                            dispatch({ type: 'opportinities/deleteOpprtinity', payload: item.id });
                            toast.success('Opportunity deleted.')
                          }
                        }}
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredOpportunities.length > itemsPerPage && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-orange-500 text-white hover:bg-orange-600"}`}
              >
                Previous
              </button>
              <span className="px-4 py-2 text-gray-700 font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-orange-500 text-white hover:bg-orange-600"}`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;


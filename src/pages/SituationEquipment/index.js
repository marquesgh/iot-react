import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import EquipmentService from '../../services/EquipmentService';
import './SituationEquipment.css';

function SituationEquipmentPage() {
  const [equipments, setSituationEquipments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchSituationEquipments() {
      setIsLoading(true);
      try {
        const response = await EquipmentService.getSituation();
        setSituationEquipments([response.data]);
        console.log(equipments);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSituationEquipments();
  }, []);

  return (
    <div className="graph-container">
      {error ? (
        <div>Failed to load equipments: {error}</div>
      ) : isLoading ? (
        <div>Loading equipments...</div>
      ) : (
        <div>
          <BarChart
            width={500}
            height={300}
            data={equipments}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="on" fill="#8884d8" />
            <Bar dataKey="off" fill="#82ca9d" />
          </BarChart>
        </div>
      )}
    </div>
  );
}

export default SituationEquipmentPage;

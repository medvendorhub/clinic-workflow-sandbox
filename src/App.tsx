import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './views/Dashboard';
import { Consultation } from './views/Consultation';
import type { Patient, Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleStartConsultation = (patient: Patient) => {
    setSelectedPatient(patient);
    setCurrentPage('consultation');
  };

  const handleEndConsultation = () => {
    setSelectedPatient(null);
    setCurrentPage('dashboard');
  };

  return (
    <Layout>
      {currentPage === 'dashboard' && (
        <Dashboard onStartConsultation={handleStartConsultation} />
      )}

      {currentPage === 'consultation' && selectedPatient && (
        <Consultation
          patient={selectedPatient}
          onEndConsultation={handleEndConsultation}
        />
      )}

      {/* Fallback if state gets weird (shouldn't happen) */}
      {currentPage === 'consultation' && !selectedPatient && (
        <Dashboard onStartConsultation={handleStartConsultation} />
      )}
    </Layout>
  );
}

export default App;

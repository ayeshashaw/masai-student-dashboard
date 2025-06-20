import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    batch: '',
    skill: ''
  });

  const batches = ['FT Web 17', 'FT Web 18', 'FT Web 19', 'FT Web 20', 'FT Web 21'];
  const skillOptions = ['HTML', 'CSS', 'JavaScript', 'React'];

  // Fetch students from Firebase on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'students'));
        const studentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudents(studentsData);
      } catch (error) {
        console.error('Error fetching students: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on selected filters
  const filteredStudents = students.filter(student => {
    const batchMatch = !filters.batch || student.batchName === filters.batch;
    const skillMatch = !filters.skill || student.skills.includes(filters.skill);
    return batchMatch && skillMatch;
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const clearFilters = () => {
    setFilters({ batch: '', skill: '' });
  };

  if (loading) {
    return (
      <div className="student-list-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading students...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="student-list-container">
      <div className="list-header">
        <h2>Student List</h2>
        <p className="list-subtitle">
          {filteredStudents.length} of {students.length} students
        </p>
      </div>

      <div className="filters-section">
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="batch-filter">Filter by Batch:</label>
            <select
              id="batch-filter"
              name="batch"
              value={filters.batch}
              onChange={handleFilterChange}
            >
              <option value="">All Batches</option>
              {batches.map(batch => (
                <option key={batch} value={batch}>{batch}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="skill-filter">Filter by Skill:</label>
            <select
              id="skill-filter"
              name="skill"
              value={filters.skill}
              onChange={handleFilterChange}
            >
              <option value="">All Skills</option>
              {skillOptions.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>

          {(filters.batch || filters.skill) && (
            <button className="clear-filters" onClick={clearFilters}>
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {filteredStudents.length === 0 ? (
        <div className="empty-state">
          <p>No students found matching the current filters.</p>
          {students.length === 0 && <p>Register the first student to get started!</p>}
        </div>
      ) : (
        <div className="students-grid">
          {filteredStudents.map(student => (
            <div key={student.id} className="student-card">
              <div className="student-header">
                <h3>{student.fullName}</h3>
                <span className="batch-badge">{student.batchName}</span>
              </div>
              
              <div className="student-details">
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{student.email}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{student.phoneNumber}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Gender:</span>
                  <span className="detail-value">{student.gender}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Skills:</span>
                  <div className="skills-container">
                    {student.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
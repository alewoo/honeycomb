// Import the functions using require
const fetchProjects = require('./fetch-projects');
const fetchClubs = require('./fetch-clubs');
const fetchClasses = require('./fetch-classes');

// Modify generateRoadmap to accept formData
async function generateRoadmap(formData) {
  try {
    // Wait for all the fetch functions to complete concurrently, passing formData where necessary
    const [projects, clubs, classes] = await Promise.all([
      fetchProjects(formData),
      fetchClubs(formData), 
      fetchClasses(formData) 
    ]);

    // Create the roadmap object using the returned data
    const roadmap = {
      projects,
      clubs,
      classes
    };

    // Return the roadmap object
    return roadmap;
  } catch (error) {
    console.error('Error generating roadmap:', error);
    throw error;
  }
}

// Export the generateRoadmap function
module.exports = generateRoadmap;
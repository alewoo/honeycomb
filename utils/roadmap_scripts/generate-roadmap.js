// Import the functions using require
const fetchProjects = require('./fetch-projects');
const fetchClubs = require('./fetch-clubs');
const fetchClasses = require('./fetch-classes');

async function generateProjects() {
  try {
    // Wait for all the fetch functions to complete concurrently
    const [projects, clubs, classes] = await Promise.all([
      fetchProjects(),
      fetchClubs(),
      fetchClasses()
    ]);

    // Create the roadmap object
    const roadmap = {
      projects,
      clubs,
      classes
    };

    // Return the roadmap object
    return roadmap;
  } catch (error) {
    console.error('Error generating projects:', error);
    throw error;
  }
}

// Export the generateProjects function
module.exports = generateProjects;

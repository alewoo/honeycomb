require('dotenv').config();

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
    
    
  
  async function fetchClubs() {

    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    console.log(apiKey)
    
    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    });
  
    const generationConfig = {
    temperature: 0.95,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
    };

    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            { text: "You are a club recommendation system for Georgia Tech. Based on the following information about a student and the provided context about university clubs (enclosed by 3 backticks), recommend 5 relevant clubs that align with the student's goals.\n\nStudent Information:\nMajor: CS\nYear: freshman\nDesired Roles: SWE, ML/AI\n\nPlease provide recommendations in the following JSON format:\n[\n  {\n    \"name\": \"Club Name\",\n    \"reason\": \"Reason for recommendation\"\n  },\n  ...\n]\n\nEnsure that your response is valid JSON and includes exactly 5 club recommendations.\n\nClubs' information:\n```\n[\n    {\n      \"name\": \"180 Degrees Consulting\",\n      \"desc\": \"Provides pro-bono consulting services to nonprofits and social enterprises, offering students the chance to gain real-world experience while making a positive impact.\"\n    },\n    {\n      \"name\": \"Academic Quizbowl Team\",\n      \"desc\": \"Competes in academic trivia tournaments, testing knowledge across a wide range of subjects including science, history, and literature.\"\n    },\n    {\n      \"name\": \"Aerospace Design-Build-Fly Club\",\n      \"desc\": \"Focuses on designing, building, and flying aerospace projects, giving students hands-on experience in aviation and engineering.\"\n    },\n    {\n      \"name\": \"AIESEC\",\n      \"desc\": \"An international youth leadership organization offering global internships and volunteering opportunities for students to develop leadership skills.\"\n    },\n    {\n      \"name\": \"Alpha Kappa Psi\",\n      \"desc\": \"A professional business fraternity that prepares students for success in business through networking, leadership development, and professional events.\"\n    },\n    {\n      \"name\": \"American Institute of Aeronautics and Astronautics (AIAA)\",\n      \"desc\": \"Supports students interested in aerospace through technical projects, networking, and events related to aviation and space exploration.\"\n    },\n    {\n      \"name\": \"American Society of Civil Engineers (ASCE)\",\n      \"desc\": \"Provides civil engineering students with opportunities for professional development, networking, and participation in engineering competitions.\"\n    },\n    {\n      \"name\": \"Association for Computing Machinery (ACM)\",\n      \"desc\": \"A student chapter of the global computing society that organizes workshops, hackathons, and networking events to foster a strong computer science community.\"\n    },\n    {\n      \"name\": \"Biomedical Engineering Society (BMES)\",\n      \"desc\": \"Supports biomedical engineering students with opportunities for professional development, research, and networking in the medical and biotech industries.\"\n    },\n    {\n      \"name\": \"Entrepreneurs Society\",\n      \"desc\": \"Fosters entrepreneurship at Georgia Tech by providing resources, mentorship, and networking opportunities for students interested in launching startups.\"\n    },\n    {\n      \"name\": \"African American Student Union\",\n      \"desc\": \"Advocates for the needs and concerns of African American students while celebrating their culture through events and community-building activities.\"\n    },\n    {\n      \"name\": \"African Student Association\",\n      \"desc\": \"Unites African students and promotes African culture on campus through events, social gatherings, and educational initiatives.\"\n    },\n    {\n      \"name\": \"Asian American Student Association\",\n      \"desc\": \"Promotes awareness of Asian-American culture and issues while fostering community through cultural events, discussions, and social activities.\"\n    },\n    {\n      \"name\": \"Caribbean Student Association\",\n      \"desc\": \"Celebrates Caribbean culture through events, performances, and social activities, while creating a supportive community for Caribbean students.\"\n    },\n    {\n      \"name\": \"Chinese Student Association\",\n      \"desc\": \"Organizes cultural events, social gatherings, and educational programs to promote Chinese culture and support Chinese students at Georgia Tech.\"\n    },\n    {\n      \"name\": \"Hellenic Society\",\n      \"desc\": \"Promotes Greek culture and heritage through events, activities, and social gatherings for students of Greek descent and those interested in Greek traditions.\"\n    },\n    {\n      \"name\": \"Hispanic Student Association\",\n      \"desc\": \"Aims to promote Hispanic culture and heritage while providing a supportive community for Hispanic students through social, cultural, and educational events.\"\n    },\n    {\n      \"name\": \"Indian Student Association\",\n      \"desc\": \"Celebrates Indian culture through festivals, performances, and social events, while fostering a sense of community among Indian students.\"\n    },\n    {\n      \"name\": \"Korean Undergraduate Student Association\",\n      \"desc\": \"Promotes Korean culture and supports the Korean student community through events, cultural activities, and social gatherings.\"\n    },\n    {\n      \"name\": \"Vietnamese Student Association\",\n      \"desc\": \"Fosters community among Vietnamese students and promotes Vietnamese culture through cultural events, social gatherings, and educational programs.\"\n    },\n    {\n      \"name\": \"A Cappella\",\n      \"desc\": \"Brings together students with a passion for singing to perform a cappella music, offering opportunities for performances and competitions.\"\n    },\n    {\n      \"name\": \"Aarohi\",\n      \"desc\": \"Georgia Tech’s premier Indian classical music group, promoting and performing traditional Indian music through concerts and events.\"\n    },\n    {\n      \"name\": \"DramaTech Theatre\",\n      \"desc\": \"The campus theatre group, offering students opportunities to perform, direct, and produce plays, musicals, and other theatrical works.\"\n    },\n    {\n      \"name\": \"Georgia Tech Chamber Choir\",\n      \"desc\": \"An audition-based choir that performs classical and contemporary choral works, offering opportunities for vocalists to hone their skills.\"\n    },\n    {\n      \"name\": \"Georgia Tech Symphony Orchestra\",\n      \"desc\": \"A full orchestra made up of student musicians, performing classical music at concerts throughout the year.\"\n    },\n    {\n      \"name\": \"Glee Club\",\n      \"desc\": \"An all-male chorus performing a variety of musical styles, from classical to contemporary, at campus events and concerts.\"\n    },\n    {\n      \"name\": \"Jazz Ensemble\",\n      \"desc\": \"Provides students with the opportunity to perform jazz music in a big band setting, offering concerts and performances throughout the year.\"\n    },\n    {\n      \"name\": \"Salsa Club\",\n      \"desc\": \"A club for students interested in learning and practicing salsa dancing, hosting regular lessons and social dance events.\"\n    },\n    {\n      \"name\": \"Technique\",\n      \"desc\": \"The student-run newspaper that covers campus news, events, and student life, offering opportunities in journalism, writing, and photography.\"\n    },\n    {\n      \"name\": \"WREK Radio (91.1 FM)\",\n      \"desc\": \"Georgia Tech’s student-run radio station, providing students with opportunities to DJ, produce shows, and manage the station’s programming.\"\n    },\n    {\n      \"name\": \"Accessible Prosthetics Initiative at Georgia Tech\",\n      \"desc\": \"Aims to improve the accessibility of prosthetics by developing innovative and affordable prosthetic solutions through student-driven projects.\"\n    },\n    {\n      \"name\": \"Alpha Phi Omega\",\n      \"desc\": \"A co-ed service fraternity dedicated to developing leadership, promoting friendship, and providing service to the community.\"\n    },\n    {\n      \"name\": \"Engineers Without Borders\",\n      \"desc\": \"Works on international engineering projects to improve infrastructure in underserved communities, combining technical skills with humanitarian efforts.\"\n    },\n    {\n      \"name\": \"Habitat for Humanity\",\n      \"desc\": \"Partners with Habitat for Humanity to build affordable housing in local communities, giving students the opportunity to contribute to meaningful service projects.\"\n    },\n    {\n      \"name\": \"MOVE\",\n      \"desc\": \"The umbrella organization for community service at Georgia Tech, coordinating volunteer opportunities and service events for students.\"\n    },\n    {\n      \"name\": \"Airsoft Club\",\n      \"desc\": \"A recreational club for students interested in airsoft, organizing friendly matches and events for members to participate in.\"\n    },\n    {\n      \"name\": \"Archery Club\",\n      \"desc\": \"A club for students interested in learning and practicing archery, offering lessons, practice sessions, and competitions.\"\n    },\n    {\n      \"name\": \"Barbell Club\",\n      \"desc\": \"Provides a space for students to engage in strength training and powerlifting, promoting physical fitness and competition.\"\n    },\n    {\n      \"name\": \"Climbing Club\",\n      \"desc\": \"A club for rock climbing enthusiasts, offering trips, climbing sessions, and training for students of all skill levels.\"\n    },\n    {\n      \"name\": \"Cycling Club\",\n      \"desc\": \"Brings together students with a passion for cycling, organizing group rides, races, and social events for all levels of cyclists.\"\n    },\n    {\n      \"name\": \"Fencing Club\",\n      \"desc\": \"A competitive and recreational club for students interested in fencing, offering instruction and participation in tournaments.\"\n    },\n    {\n      \"name\": \"Georgia Tech Motorsports\",\n      \"desc\": \"Designs and builds race cars to compete in Formula SAE, providing students with hands-on experience in automotive engineering.\"\n    },\n    {\n      \"name\": \"Ice Hockey Club\",\n      \"desc\": \"A club for students interested in playing ice hockey, competing in local and regional leagues while building team camaraderie.\"\n    },\n    {\n      \"name\": \"Outdoor Recreation (ORGT)\",\n      \"desc\": \"Offers students opportunities to participate in outdoor activities such as hiking, camping, and kayaking, fostering a love for adventure and nature.\"\n    },\n    {\n      \"name\": \"Rowing Club\",\n      \"desc\": \"A competitive rowing team that trains and competes in regattas, offering students the chance to develop both fitness and teamwork skills.\"\n    },\n    {\n      \"name\": \"Aero Makers at Georgia Tech\",\n      \"desc\": \"A group focused on creating aerial robotics and drones, providing students with the opportunity to work on cutting-edge aerospace technology.\"\n    },\n    {\n      \"name\": \"Autonomous Underwater Vehicle Team\",\n      \"desc\": \"Designs and builds autonomous underwater vehicles to compete in national competitions, providing students with experience in robotics and engineering.\"\n    },\n    {\n      \"name\": \"Blockchain Club\",\n      \"desc\": \"Explores blockchain technology and its applications, offering students the opportunity to learn, network, and work on projects in the blockchain space.\"\n    },\n    {\n      \"name\": \"Cybersecurity Club\",\n      \"desc\": \"Provides students with hands-on experience in cybersecurity through competitions, workshops, and research opportunities.\"\n    },\n    {\n      \"name\": \"Data Science Club\",\n      \"desc\": \"Focuses on teaching data science skills\"\n    },\n    \n    {\n        \"name\": \"GT Solar Racing\",\n        \"desc\": \"Designs, builds, and races solar-powered vehicles, giving students hands-on experience with renewable energy technology and automotive design.\"\n    },\n    {\n        \"name\": \"HyTech Racing\",\n        \"desc\": \"Develops electric race cars to compete in the Formula SAE Electric competition, providing students with experience in automotive and electric vehicle engineering.\"\n    },\n    {\n        \"name\": \"RoboJackets\",\n        \"desc\": \"Builds competitive robots for a variety of competitions, offering students opportunities to work on robotics, programming, and mechanical engineering.\"\n    },\n    {\n        \"name\": \"VGDev\",\n        \"desc\": \"A game development club that brings together students interested in designing and building video games, from coding to art and sound design.\"\n    },\n    {\n        \"name\": \"Virtual Reality Club\",\n        \"desc\": \"Explores virtual reality (VR) and augmented reality (AR) technologies through workshops, projects, and discussions.\"\n    },\n    {\n        \"name\": \"EcoCAR Team\",\n        \"desc\": \"A student team that designs and builds advanced vehicles with a focus on energy efficiency and sustainability to compete in the EcoCAR competition.\"\n    },\n    {\n        \"name\": \"Engineers for a Sustainable World\",\n        \"desc\": \"Focuses on sustainability engineering projects, working to find innovative solutions to environmental challenges.\"\n    },\n    {\n        \"name\": \"Green Alliance\",\n        \"desc\": \"Promotes environmental awareness and sustainable practices on campus through education, outreach, and community projects.\"\n    },\n    {\n        \"name\": \"Students Organizing for Sustainability (SOS)\",\n        \"desc\": \"A student-led organization that advocates for environmental sustainability on campus through activism, events, and initiatives.\"\n    },\n    {\n        \"name\": \"Tech Conservation Society\",\n        \"desc\": \"Focuses on wildlife conservation and environmental stewardship through educational events, fieldwork, and community involvement.\"\n    },\n    {\n        \"name\": \"Alexander Hamilton Society\",\n        \"desc\": \"Promotes debate and discussion on foreign policy and national security issues through guest speakers and events.\"\n    },\n    {\n        \"name\": \"College Democrats\",\n        \"desc\": \"Supports progressive political causes, encourages political engagement, and advocates for the Democratic Party on campus.\"\n    },\n    {\n        \"name\": \"College Republicans\",\n        \"desc\": \"Promotes conservative values and supports Republican candidates, while fostering political discussion and engagement on campus.\"\n    },\n    {\n        \"name\": \"Model United Nations\",\n        \"desc\": \"Simulates United Nations conferences, giving students the opportunity to debate global issues, develop diplomatic skills, and participate in competitions.\"\n    },\n    {\n        \"name\": \"NAACP at Georgia Tech\",\n        \"desc\": \"Focuses on civil rights advocacy and promoting equality for all, with a special emphasis on African American students at Georgia Tech.\"\n    },\n    {\n        \"name\": \"Baptist Collegiate Ministry\",\n        \"desc\": \"Offers Christian fellowship, worship, and service opportunities for students, creating a supportive faith-based community.\"\n    },\n    {\n        \"name\": \"Catholic Student Organization\",\n        \"desc\": \"Provides a community for Catholic students to practice their faith, participate in mass, and engage in service projects.\"\n    },\n    {\n        \"name\": \"Hillel\",\n        \"desc\": \"The center for Jewish life on campus, offering religious, cultural, and social events for Jewish students.\"\n    },\n    {\n        \"name\": \"Muslim Students Association\",\n        \"desc\": \"Supports Muslim students by offering religious services, social events, and educational programs about Islam.\"\n    },\n    {\n        \"name\": \"Tathagata Buddhist Student Association\",\n        \"desc\": \"Promotes Buddhist teachings and mindfulness practices through meditation sessions, discussions, and cultural events.\"\n    },\n    {\n        \"name\": \"Anime Club\",\n        \"desc\": \"Brings together fans of anime for viewings, discussions, and events celebrating Japanese animation and culture.\"\n    },\n    {\n        \"name\": \"Chess Club\",\n        \"desc\": \"Offers a space for students to learn and play chess, participate in tournaments, and improve their game.\"\n    },\n    {\n        \"name\": \"Esports Club\",\n        \"desc\": \"Supports competitive video gaming, offering teams and tournaments in games like League of Legends, Overwatch, and more.\"\n    },\n    {\n        \"name\": \"GT Lorax\",\n        \"desc\": \"Focuses on environmental activism and conservation efforts, inspired by Dr. Seuss's ‘The Lorax.’\"\n    },\n    {\n        \"name\": \"Photography Club\",\n        \"desc\": \"Provides a space for students interested in photography to share their work, learn new techniques, and participate in photo walks.\"\n    },\n    {\n        \"name\": \"Pokémon Club\",\n        \"desc\": \"A club for Pokémon enthusiasts, hosting events, tournaments, and casual meetups for fans of the franchise.\"\n    },\n    {\n        \"name\": \"Science Fiction Club\",\n        \"desc\": \"Celebrates science fiction literature, films, and media through discussions, events, and screenings.\"\n    },\n    {\n        \"name\": \"Tabletop Gaming Club\",\n        \"desc\": \"A club for fans of board games, card games, and role-playing games, offering regular gaming sessions and tournaments.\"\n    },\n    {\n        \"name\": \"Tea Club\",\n        \"desc\": \"A community for tea enthusiasts, offering tea tastings, discussions about tea culture, and social gatherings.\"\n    },\n    {\n        \"name\": \"Toastmasters\",\n        \"desc\": \"Helps students improve their public speaking and leadership skills through structured speeches, evaluations, and practice sessions.\"\n    },\n    {\n        \"name\": \"Alpha Chi Omega\",\n        \"desc\": \"A women’s fraternity focused on sisterhood, leadership, and philanthropy, with an emphasis on supporting domestic violence awareness.\"\n    },\n    {\n        \"name\": \"Alpha Gamma Delta\",\n        \"desc\": \"A women's fraternity dedicated to fostering friendship, leadership, and academic excellence while supporting philanthropic causes.\"\n    },\n    {\n        \"name\": \"Alpha Phi\",\n        \"desc\": \"A women’s fraternity that emphasizes sisterhood, leadership, and philanthropy, particularly heart health initiatives.\"\n    },\n    {\n        \"name\": \"Alpha Phi Alpha\",\n        \"desc\": \"A historically African American fraternity that focuses on leadership, academic excellence, and community service.\"\n    },\n    {\n        \"name\": \"Delta Chi\",\n        \"desc\": \"A social fraternity that promotes brotherhood, leadership, and community involvement among its members.\"\n    },\n    {\n        \"name\": \"American Chemical Society Student Affiliates\",\n        \"desc\": \"A student chapter of the American Chemical Society, offering opportunities for networking, research, and professional development in chemistry.\"\n    },\n    {\n        \"name\": \"Biology Student Advisory Board\",\n        \"desc\": \"Represents biology students by providing feedback to faculty and organizing events to enhance the academic experience.\"\n    },\n    {\n        \"name\": \"GT Physics Club\",\n        \"desc\": \"Promotes interest in physics through guest speakers, research opportunities, and discussions on cutting-edge topics in the field.\"\n    },\n    {\n        \"name\": \"Materials Research Society\",\n        \"desc\": \"A professional organization that connects students with research and networking opportunities in materials science.\"\n    },\n    {\n        \"name\": \"Psychology Club\",\n        \"desc\": \"Brings together students interested in psychology for discussions, guest speakers, and events that explore the field’s various aspects.\"\n    },\n    {\n        \"name\": \"CREATE-X\",\n        \"desc\": \"An entrepreneurship program that helps students build startups through mentorship, resources, and funding.\"\n    },\n    {\n        \"name\": \"InVenture Prize\",\n        \"desc\": \"A student innovation competition that encourages students to develop and pitch their inventions or business ideas.\"\n    },\n    {\n        \"name\": \"Startup Exchange\",\n        \"desc\": \"A student organization that fosters a startup community by connecting aspiring entrepreneurs with resources, mentorship, and networking opportunities.\"\n    },\n    {\n        \"name\": \"Active Minds\",\n        \"desc\": \"Promotes mental health awareness and education on campus, providing support and resources for students struggling with mental health issues.\"\n    },\n    {\n        \"name\": \"Health Initiatives Peer Educators\",\n        \"desc\": \"Trains students to provide health education on topics like nutrition, mental health, and sexual health to the campus community.\"\n    },\n    {\n        \"name\": \"Meditation Club\",\n        \"desc\": \"Offers students a space to practice meditation and mindfulness through regular sessions and discussions on mental wellness.\"\n    },\n    {\n        \"name\": \"Nutrition Club\",\n        \"desc\": \"Educates students about nutrition and healthy eating through workshops, discussions, and community events.\"\n    },\n    {\n        \"name\": \"Swim Club\",\n        \"desc\": \"A club for students interested in swimming, offering opportunities for both competitive and recreational swimmers to train and participate in meets.\"\n    },\n    {\n        \"name\": \"3484 Magazine\",\n        \"desc\": \"A student-run magazine that publishes creative writing, photography, and art, showcasing the work of Georgia Tech’s artistic community.\"\n    },\n    {\n        \"name\": \"The Blueprint\",\n        \"desc\": \"Georgia Tech’s official yearbook, offering students opportunities to contribute to photography, writing, design, and editing.\"\n    }      \n]\n```\n"}
          ],
        }
      ]
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    jsonResult = result.response.text()

    const cleanResult = jsonResult
    .replace(/^```json\s*/, '')  // Removes ```json and any following whitespace/newlines
    .replace(/```$/, '');        // Removes the trailing ```

    
    clubs = {};

    try {
        clubs = JSON.parse(cleanResult);
        console.log(clubs)
        clubs.forEach(club => {
            console.log(club["name"] + ": " + club["reason"]);
        });
      } catch (error) {
        console.error('Invalid JSON:', error);
      }
    return clubs
  }

fetchClubs();
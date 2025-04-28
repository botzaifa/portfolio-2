const WORK = [
  
  {
    name: 'Audionaut',
    images: ['audionaut2.png'],
    description:
      '<p><strong>Audionaut</strong> is an end-to-end audio processing application built using <strong>Streamlit</strong> that focuses on two major audio engineering functionalities: <strong>Stem Separation</strong> and <strong>Audio Enhancement</strong>.</p><br />' +
      '<p>In the Stem Separation module, users can upload an audio file (e.g., MP3, WAV) and the system separates it into individual components like <strong>vocals, drums, bass, and others</strong> using the powerful <strong>HDEMUCS_HIGH_MUSDB_PLUS</strong> model. A dedicated <strong>Karaoke Mode</strong> has been successfully implemented, allowing users to instantly generate instrumental versions of their favorite songs by removing only the vocals.</p><br />' +
      '<p>The Audio Enhancement module utilizes <strong>DeepFilterNet</strong>, a lightweight and efficient real-time noise suppression network. It helps users clean up noisy recordings, making it especially useful for podcasters, musicians, and content creators who want to improve the clarity and quality of their audio with minimal effort.</p><br />' +
      '<p>Audionaut\'s interface is designed with simplicity and accessibility in mind using <strong>Streamlit</strong>. All backend processing tasks, such as model inference and enhancement workflows, are abstracted to provide a seamless user experience. While multi-format audio-video file upload and automatic file conversion is planned for future updates, the current system supports direct audio uploads to maintain performance and stability.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, Streamlit, Torch, DeepFilterNet, Demucs, Soundfile, Librosa</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Direct audio file uploads (MP3, WAV) for clean and stable processing.</li>' +
        '<li>Intelligent stem separation into vocals, drums, bass, and other components.</li>' +
        '<li>One-click Karaoke Mode to generate instrumental versions of songs.</li>' +
        '<li>Real-time audio enhancement using advanced noise suppression techniques.</li>' +
        '<li>Simple, intuitive web interface with live processing feedback and download options.</li>' +
        '<li>Future Scope: Support for any audio-video format with automatic conversion.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> Audionaut empowers creators and audio enthusiasts to access professional-grade audio editing and enhancement tools directly through the browser, removing the need for expensive hardware or complex software setups.</p>',
    summary:
      'A Streamlit web app for intelligent stem separation and real-time audio enhancement, featuring a fully functional karaoke mode.',
    date: '04.2025',
    link: 'https://audionaut.streamlit.app/',
  },

  {
    name: 'CinemASKit',
    images: ['cinemaskit.png'],
    description:
      '<p><strong>CinemASKit</strong> is a personalized movie recommender system designed to help users discover critically acclaimed films based on their preferences. It leverages a combination of web scraping, machine learning, and interactive web application development to deliver a seamless recommendation experience.</p><br />' +
      '<p>The application scrapes the <strong>IMDb Top 250 Movies</strong> list using <strong>BeautifulSoup</strong> and builds a content-based recommendation system that suggests similar top-rated movies based on user selections. After the user selects a favorite movie from the list, CinemASKit intelligently analyzes its genre, keywords, and popularity to recommend movies that match the user\'s taste, offering an enjoyable and curated browsing experience.</p><br />' +
      '<p>CinemASKit\'s frontend is built using <strong>Streamlit</strong>, providing an intuitive and clean user interface. Users can instantly see recommendations without any need for registration or logins, keeping the experience lightweight and focused. The machine learning model responsible for the recommendations is serialized and loaded using <strong>Pickle</strong>. Although initial deployment encountered challenges with model loading on cloud environments (due to compatibility and file path issues), the application is now fully functional and efficient.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, Streamlit, Scikit-learn, BeautifulSoup, Pandas, Pickle</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Real-time scraping of the IMDb Top 250 movies list ensuring up-to-date recommendations.</li>' +
        '<li>Content-based recommendation algorithm analyzing genres, descriptions, and metadata.</li>' +
        '<li>Fully interactive web application built with Streamlit offering a clean and minimalistic design.</li>' +
        '<li>Instant movie suggestions based on a single selection, enhancing discovery without overwhelming the user.</li>' +
        '<li>Serialization of machine learning models with Pickle for efficient model loading and deployment.</li>' +
        '<li>Lightweight, no-login experience making it accessible and fast for all users.</li>' +
      '</ul><br />' +
      '<p><strong>Future Scope:</strong></p>' +
      '<ul>' +
        '<li>Expanding beyond IMDb Top 250 to include newer releases, niche films, and personalized trending lists.</li>' +
        '<li>Adding filters for genre, release year, and IMDb ratings for more customized recommendations.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> CinemASKit makes quality cinema discovery effortless for movie lovers, offering personalized suggestions from a curated list of top-rated films. It reduces the time spent searching and ensures that users always have their next great watch ready at their fingertips.</p>',
    summary:
      'A Streamlit-based movie recommender system that suggests critically acclaimed movies based on your favorites, using real-time IMDb scraping and intelligent content analysis.',
    date: '04.2025',
    link: 'https://cinemaskit.streamlit.app/',
  },

  {
    name: 'Text Summarizer',
    images: ['textsummarizer.png'],
    description:
      '<p><strong>Text Summarizer</strong> is an end-to-end Natural Language Processing (NLP) web application designed to condense large volumes of text into concise, meaningful summaries. Built using modern deep learning models and an interactive Streamlit frontend, it empowers users to quickly understand the essence of long articles, reports, blogs, or any textual content without reading them fully.</p><br />' +
      '<p>The summarization engine leverages a fine-tuned <strong>T5 (Text-To-Text Transfer Transformer)</strong> model, a state-of-the-art transformer architecture known for its performance in text generation tasks. The backend system is carefully optimized to handle long textual inputs, tokenize them properly, and generate coherent, grammatically correct summaries in just a few seconds.</p><br />' +
      '<p>Users simply paste their input text into the interface, select the desired length of the summary (short, medium, or long), and instantly receive a well-structured summary. The system also includes advanced preprocessing pipelines to clean, normalize, and prepare the text before feeding it into the model, ensuring higher quality outputs.</p><br />' +
      '<p>The front-end is built using <strong>Streamlit</strong> to provide a responsive, clean, and mobile-friendly user experience. Model loading, inference, and response generation are handled asynchronously to minimize loading times and ensure a smooth workflow even for larger documents.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, Streamlit, Huggingface Transformers, T5 Model, PyTorch, NLTK, SpaCy</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Uses a fine-tuned T5 model to perform abstractive summarization.</li>' +
        '<li>Handles long text inputs and provides multiple summary lengths (short, medium, long).</li>' +
        '<li>Interactive Streamlit frontend with clean UI/UX for ease of use.</li>' +
        '<li>Optimized inference pipelines with text cleaning and preprocessing for better model accuracy.</li>' +
        '<li>Highly responsive — capable of generating summaries within seconds even for large articles.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> Text Summarizer drastically reduces the cognitive load for users by offering quick, easy-to-read versions of long documents, making it an invaluable tool for students, researchers, journalists, and business professionals who deal with heavy reading daily.</p>',
    summary:
      'An NLP-powered web app that generates concise summaries from long-form text using a fine-tuned T5 Transformer model, built with Streamlit.',
    date: '04.2025',
    link: 'https://github.com/botzaifa/Text-Summarizer/',
  },
  
  {
    name: 'Native Ad Gen',
    images: ['nativeadgen.png'],
    description:
      '<p><strong>Native Ad Gen</strong> is a multilingual advertisement generator that automatically creates visually compelling ad creatives based on user-provided product details. Designed to simplify the ad creation process for businesses and marketers, Native Ad Gen supports multiple languages and delivers high-quality advertisement images optimized for various social media platforms.</p><br />' +
      '<p>The user inputs a product name and description, selects the desired platform (such as Instagram, Facebook, or YouTube), and chooses the target language (English, Hindi, Gujarati, Marathi, Arabic, and more). The application then dynamically generates a catchy advertisement text and produces a custom-sized ad image using automated graphic generation techniques. This ensures that ads are platform-optimized and culturally relevant based on the language selected.</p><br />' +
      '<p>The backend is built using <strong>Python</strong> with <strong>Flask</strong> as the web framework, while image generation and text styling are handled programmatically using libraries like <strong>Pillow</strong> and <strong>Google Fonts API</strong>. Native language text rendering is supported through proper font management and Unicode handling, ensuring that non-Latin scripts display beautifully. For the frontend, standard web technologies like <strong>HTML, CSS, and JavaScript</strong> are used, providing a simple and intuitive UI for users to interact with the tool.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, Flask, Pillow (PIL), Google Fonts API, HTML, CSS, JavaScript</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Automatic ad content generation based on product details.</li>' +
        '<li>Multilingual support — generates ads in Hindi, Gujarati, Marathi, Arabic, and English.</li>' +
        '<li>Platform-specific ad dimensions for Instagram, Facebook, and YouTube.</li>' +
        '<li>Custom font integration for native script support and visual appeal.</li>' +
        '<li>Simple, user-friendly interface with real-time preview of generated ads.</li>' +
        '<li>Optimized for both desktop and mobile usage through responsive frontend design.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> Native Ad Gen makes professional ad creation accessible to small businesses, startups, and individuals without requiring graphic design skills. It reduces the time and cost needed for creating effective marketing materials and bridges language barriers in digital advertising.</p>',
    summary:
      'A multilingual ad generation tool that creates platform-optimized advertisement images based on product details, built using Python and Flask.',
    date: '12.2023',
    link: 'https://github.com/botzaifa/NativeADGen',
  },
  
  {
    name: 'Wrapped',
    images: ['wrapped.png'],
    description:
      '<p><strong>Wrapped</strong> is a web application designed to bring the magic of Spotify Wrapped to users anytime during the year — not just at the official end-of-year release. It allows Spotify users to generate their personal music rewind experience based on their listening history for any selected time range, offering deep insights into their favorite artists, tracks, genres, and more on demand.</p><br />' +
      '<p>The application connects securely to the user\'s Spotify account using the <strong>Spotify Web API</strong> through OAuth authentication. After authorization, it fetches the user\'s top tracks, artists, and genres for three different periods — short-term (last 4 weeks), medium-term (last 6 months), or long-term (all time). The results are beautifully visualized in a shareable format, mimicking the feel of official Spotify Wrapped, but available at any time.</p><br />' +
      '<p>The backend is powered by <strong>Python</strong> with <strong>Flask</strong> to manage API requests, user sessions, and token management. The frontend is crafted using <strong>HTML, CSS, and JavaScript</strong> for a smooth, mobile-responsive user experience. Extensive attention is given to the UI/UX to make the rewind feel celebratory and personal, encouraging users to share their results with friends on social media.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, Flask, Spotify Web API, OAuth 2.0, HTML, CSS, JavaScript</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Instant Spotify Wrapped experience — users can view their music rewind anytime, not just year-end.</li>' +
        '<li>Secure OAuth 2.0 authentication to protect user data and ensure privacy.</li>' +
        '<li>Top tracks, artists, and genres displayed with clean, vibrant visualizations.</li>' +
        '<li>Option to select short-term, medium-term, or long-term music stats.</li>' +
        '<li>Designed for easy sharing across Instagram, Twitter, and other social media platforms.</li>' +
        '<li>Mobile-friendly responsive design for optimal viewing across devices.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> Wrapped makes music data fun, personal, and immediately accessible, allowing users to reflect on their listening habits anytime. It enhances user engagement with Spotify and offers a shareable experience that users love throughout the year, not just in December.</p>',
    summary:
      'A Spotify Web App that recreates the Wrapped experience anytime during the year by analyzing your top tracks, artists, and genres using Spotify API.',
    date: '02.2024',
    link: 'https://github.com/botzaifa/Spotify-Wrapped',
  },
  
  {
    name: 'Fruit Detector',
    images: ['fruitdetector.png'],
    description:
      '<p><strong>Fruit Detector</strong> is a real-time object detection application focused on identifying different types of fruits from images or live camera feeds. Built with the goal of bringing machine learning and computer vision into practical applications like smart farming, retail automation, and nutrition analysis, Fruit Detector offers fast, accurate, and efficient fruit recognition.</p><br />' +
      '<p>The model was trained using a custom dataset containing images of various fruits such as apples, bananas, oranges, grapes, and strawberries. Data augmentation techniques were applied to improve robustness and performance. For the detection task, a lightweight but powerful object detection model based on <strong>YOLOv5</strong> (You Only Look Once) architecture was used, ensuring real-time detection capabilities even on resource-constrained devices.</p><br />' +
      '<p>The backend is developed using <strong>Python</strong> with powerful libraries like <strong>PyTorch</strong> for model training and inference, and <strong>OpenCV</strong> for image pre-processing and real-time camera feed integration. The frontend uses <strong>Streamlit</strong> to provide a clean and interactive web-based interface, allowing users to upload images or use their webcams to detect fruits instantly.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, PyTorch, YOLOv5, OpenCV, Streamlit</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Real-time fruit detection from uploaded images or live webcam feed.</li>' +
        '<li>Custom-trained YOLOv5 model fine-tuned for high precision and low inference time.</li>' +
        '<li>Data augmentation strategies like rotation, scaling, and brightness adjustments for better model generalization.</li>' +
        '<li>Streamlit-powered web app with a simple and intuitive interface.</li>' +
        '<li>Efficient performance even on non-GPU machines by optimizing model size and using accelerated libraries.</li>' +
        '<li>Easy extension to support more fruit classes or integrate into mobile or IoT devices in the future.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> Fruit Detector showcases the practical application of computer vision in industries like agriculture, retail, and healthcare. It empowers businesses and individuals to automate tasks like quality checking, inventory management, and dietary tracking through AI-driven fruit recognition.</p>',
    summary:
      'A real-time computer vision application that detects fruits using a custom-trained YOLOv5 model, deployed with a user-friendly Streamlit interface.',
    date: '06.2024',
    link: 'https://github.com/botzaifa/Fruit-Detection',
  },
  
  {
    name: 'BudgetBuddy',
    images: ['budgetbuddy.png'],
    description:
      '<p><strong>BudgetBuddy</strong> is a comprehensive personal finance management web application designed to help users track, manage, and optimize their financial habits with ease. It combines several useful features like budget calculators, receipt scanning, chatbot assistance, and personalized financial recommendations to promote better financial literacy and responsibility.</p><br />' +
      '<p>The application is built with a robust backend using <strong>Python</strong> and the <strong>Flask</strong> web framework, with data persistence handled by <strong>MongoDB</strong>. User authentication, secure sessions, and error handling are implemented to provide a safe environment for user data. The frontend is crafted using <strong>HTML, CSS, and JavaScript</strong> to ensure a smooth and responsive user experience across devices.</p><br />' +
      '<p>BudgetBuddy offers several modules including an OCR-powered <strong>Receipt Scanner</strong> for easy tracking of spending, a variety of <strong>Financial Calculators</strong> (EMI calculator, savings planner, expense tracker), and a <strong>Chatbot</strong> to answer finance-related queries. The system automatically parses receipt images to extract transaction details and organizes them under user accounts for better budgeting insights.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, Flask, MongoDB, OCR (Tesseract), HTML, CSS, JavaScript, Bootstrap</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Secure user registration and login system with MongoDB integration.</li>' +
        '<li>OCR-based receipt scanning that automatically fetches and records transaction data.</li>' +
        '<li>Financial calculators to assist in EMI planning, savings tracking, and budget management.</li>' +
        '<li>Interactive chatbot that guides users on financial topics and offers tips.</li>' +
        '<li>Responsive, mobile-first design for seamless accessibility on any device.</li>' +
        '<li>Modular architecture making it easy to expand with new financial tools in the future.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> BudgetBuddy empowers users to take charge of their personal finances through smart automation, insightful tracking, and user-friendly tools. It promotes healthy financial habits and offers a gateway for users to start managing money more proactively and responsibly.</p>',
    summary:
      'A personal finance management app featuring receipt scanning, financial calculators, and a chatbot assistant, built with Flask and MongoDB.',
    date: '07.2024',
    link: 'https://github.com/botzaifa/aflatoon-budget-buddy',
  },
  
  {
    name: 'Bulletin Emotion Tracker',
    images: ['bulletinemotiontracker.png'],
    description:
      '<p><strong>Bulletin Emotion Tracker</strong> is a Python-based application designed to analyze the emotional tone of the latest news articles in real-time. By integrating news aggregation APIs with Natural Language Processing (NLP) techniques, it provides insightful sentiment analysis to help users understand the emotional landscape of current events.</p><br />' +
      '<p>The application uses <strong>NewsAPI</strong> to fetch live news headlines and descriptions across multiple domains like business, entertainment, health, science, sports, and technology. It then applies <strong>TextBlob</strong> sentiment analysis to classify each article\'s sentiment as Positive, Negative, or Neutral. The results are visualized using charts generated with <strong>Matplotlib</strong> and are saved locally as sentiment distribution graphs for further analysis.</p><br />' +
      '<p>In addition, the application automatically organizes and stores the analyzed data into structured <strong>Excel</strong> files, maintaining a record of news sources, article titles, and associated sentiment scores. This feature enables users to track sentiment trends over time easily and efficiently.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, NewsAPI, TextBlob, Pandas, Matplotlib, OpenPyXL</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Real-time sentiment analysis of news articles from multiple categories.</li>' +
        '<li>Automated fetching and processing of latest headlines using NewsAPI.</li>' +
        '<li>Sentiment classification into Positive, Negative, and Neutral emotions using TextBlob.</li>' +
        '<li>Data visualization with Matplotlib: Pie charts and bar graphs showing emotion distribution.</li>' +
        '<li>Structured export of analyzed data into Excel sheets for historical tracking and reporting.</li>' +
        '<li>Simple and efficient Python script optimized for quick execution and minimal API calls.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> Bulletin Emotion Tracker helps users quickly gauge the emotional bias in current news, supporting more critical media consumption. It offers a powerful way to monitor shifts in public narratives, market sentiment, and media-driven trends.</p>',
    summary:
      'A Python tool for real-time news sentiment analysis, visualizing emotional distribution of news articles and exporting structured insights to Excel.',
    date: '03.2025',
    link: 'https://youtu.be/1vI3Or1KVjI',
  },
  
  {
    name: 'QR-Code-ART-Gen',
    images: ['qrcodeartgen.png'],
    description:
      '<p><strong>QR-Code-ART-Gen</strong> is an innovative Python application that combines AI-generated art with functional QR codes. It allows users to create visually stunning, customized QR codes by integrating unique backgrounds generated through Generative Adversarial Networks (GANs).</p><br />' +
      '<p>The system first uses a pre-trained <strong>GAN model</strong> to synthesize artistic backgrounds that are vibrant, diverse, and visually engaging. These backgrounds are then combined with standard QR code matrices using <strong>Pillow (PIL)</strong> for seamless image overlay and manipulation. The result is a scannable QR code that is both highly functional and artistically expressive, ideal for modern branding, event promotions, and creative marketing campaigns.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, GANs (Generative Adversarial Networks), qrcode library, Pillow (PIL), OpenCV, NumPy</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Generate high-quality QR codes from any text or URL input.</li>' +
        '<li>Use AI-driven GAN models to create unique, never-before-seen artistic backgrounds.</li>' +
        '<li>Overlay GAN-generated art onto QR codes without compromising their scannability.</li>' +
        '<li>Support for adding logos at the center and customizing QR code eye patterns.</li>' +
        '<li>Advanced image manipulation using OpenCV and Pillow to balance design and functionality.</li>' +
        '<li>Highly customizable — users can tweak color schemes, positioning, and transparency settings.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> QR-Code-ART-Gen merges cutting-edge AI art with practical QR code technology, giving businesses and creators a new way to captivate audiences while ensuring accessibility and functionality. It redefines how QR codes can be used aesthetically in real-world applications.</p>',
    summary:
      'An AI-powered Python tool that generates artistic QR codes by blending GAN-generated backgrounds with customizable QR matrix designs.',
    date: '02.2025',
    link: 'https://github.com/botzaifa/QR-Code-ART-Gen',
  },
  
  {
    name: 'TherapEase',
    images: ['Therap-Ease_Logo.png'],
    description:
      '<p><strong>TherapEase</strong> is a mental health screening web application designed to provide users with quick, accessible, and confidential mental health assessments. The platform helps individuals better understand their emotional well-being by offering preliminary screenings across multiple mental health conditions such as depression, anxiety, and stress.</p><br />' +
      '<p>The frontend of TherapEase is built using <strong>HTML, CSS, and JavaScript</strong> to ensure a responsive and user-friendly experience, while the backend is powered by <strong>Python and Flask</strong>. After users complete a simple questionnaire, the application processes their responses and provides insights based on widely used psychological assessment methods. No sensitive data is stored, maintaining a strong emphasis on user privacy and anonymity.</p><br />' +
      '<p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Python, Flask, Bootstrap</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Quick and easy preliminary mental health assessments covering stress, depression, and anxiety.</li>' +
        '<li>Responsive and mobile-friendly web interface for accessibility across all devices.</li>' +
        '<li>Flask-based backend that processes questionnaires and dynamically renders result summaries.</li>' +
        '<li>Strong focus on user privacy — no data storage or user tracking implemented.</li>' +
        '<li>Provides educational resources and encouragement for professional consultation based on the results.</li>' +
        '<li>Clean, minimalist UI with Bootstrap to create a calming and approachable atmosphere.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> TherapEase serves as a first step for individuals to reflect on their mental health status without barriers or fear of stigma. It empowers users to seek help proactively and promotes mental health awareness in a safe, non-judgmental environment.</p>',
    summary:
      'A mental health screening web app built with Flask that provides quick and confidential assessments for stress, anxiety, and depression.',
    date: '01.2025',
    link: 'https://github.com/botzaifa/TherapEase',
  },
  
  {
    name: 'Song RS',
    images: ['songrs.png'],
    description:
      '<p><strong>Song RS</strong> is a personalized music recommendation system that helps users discover new songs based on their top 10 most listened tracks. It leverages the power of the <strong>Spotify Web API</strong> to fetch user preferences and builds intelligent recommendations by analyzing track features and similarities.</p><br />' +
      '<p>The backend processes audio features like danceability, energy, tempo, and valence using the <strong>Spotipy</strong> library in Python, and generates suggestions that align closely with the user\'s music taste. Additional track details such as album information, artist names, and popularity scores are also fetched to enrich the recommendation experience. The focus is on making the user feel like the system understands their musical identity, not just random song matching.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, Spotipy (Spotify Web API Wrapper), Pandas, NumPy, Scikit-learn, Streamlit</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Users input their top 10 favorite songs, and the system recommends highly relevant new tracks.</li>' +
        '<li>Real-time Spotify Web API integration to retrieve detailed track attributes and metadata.</li>' +
        '<li>Feature-based similarity calculation using vectorization and nearest neighbors search.</li>' +
        '<li>Clean and interactive UI developed using Streamlit for quick deployment and sharing.</li>' +
        '<li>Detailed recommendation output including artist, album, track name, and a Spotify link.</li>' +
        '<li>Automatic handling of inconsistencies in track names and album data.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> Song RS creates a personalized music discovery journey, helping users find hidden gems that resonate with their unique tastes. It turns passive listening habits into active music exploration, powered by data-driven insights.</p>',
    summary:
      'A Spotify-powered music recommender system that suggests new tracks based on the user\'s favorite songs by analyzing track features and similarities.',
    date: '03.2025',
    link: 'https://github.com/botzaifa/Song-Recommender-System',
  },
  
  {
    name: 'CV Applications',
    images: ['handtracking.png', 'facedetection.png'],
    description:
      '<p><strong>CV Applications</strong> is a collection of real-time computer vision projects focused on <strong>Face Detection</strong> and <strong>Hand Tracking</strong>, showcasing fundamental applications of deep learning and media processing.</p><br />' +
      '<p><strong>Face Detection</strong> employs <strong>OpenCV\'s Haar Cascade Classifiers</strong> to accurately detect and localize human faces in live video streams. The system uses pre-trained models that identify facial structures based on feature cascades, ensuring quick and efficient detections even on lightweight hardware. The solution is optimized for real-time processing, making it suitable for applications like security surveillance, attendance systems, and photo editing apps.</p><br />' +
      '<p><strong>Hand Tracking</strong> utilizes <strong>Google\'s MediaPipe</strong> library, one of the most advanced pipelines for body part tracking. The hand tracking system identifies 21 key landmarks of the hand with high accuracy and stability, even during fast movements. It calculates bounding boxes, landmark coordinates, and gesture estimations, forming the basis for gesture-controlled applications such as virtual keyboards, touchless UIs, and gaming controls.</p><br />' +
      '<p><strong>Tech Stack:</strong> Python, OpenCV, MediaPipe, NumPy</p><br />' +
      '<p><strong>Key Highlights:</strong></p>' +
      '<ul>' +
        '<li>Real-time face detection using Haar Cascade models with bounding box annotations.</li>' +
        '<li>Hand landmark tracking with fingertip and palm base detection in high frame rates.</li>' +
        '<li>Optimized for low latency and high FPS, even on non-GPU machines.</li>' +
        '<li>Extensible codebases that can be integrated into larger CV projects like face recognition, sign language recognition, and touchless interfaces.</li>' +
        '<li>Clean, minimal visual overlays to maintain smooth video stream clarity during detections.</li>' +
      '</ul><br />' +
      '<p><strong>Impact:</strong> These CV Applications provide strong foundational implementations for real-world computer vision systems, offering developers, researchers, and hobbyists a starting point to build more complex visual interaction technologies.</p>',
    summary:
      'A real-time computer vision project suite for Face Detection and Hand Tracking, using OpenCV and MediaPipe for fast and accurate human feature detection.',
    date: '02.2024',
    link: 'https://github.com/botzaifa/Face-Detection',
  },
  
];
export default WORK;

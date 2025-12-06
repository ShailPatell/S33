import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  summaryText = `
    Over the past six months, Generative AI has evolved at an incredibly fast pace, with new models and capabilities being released almost constantly. One of the biggest changes has been the rise of multimodal AI systems—models that can understand and generate not just text, but also images, audio, and video. Tools like OpenAI’s GPT-4o and Google’s Gemini 2.0 have shown major improvements in how quickly they respond, how well they understand context, and how naturally they interact with users. At the same time, the open-source community has made huge progress with smaller, more efficient models that can run directly on laptops and mobile devices. This is a major shift because it reduces the need for expensive cloud servers and gives users more control over their data. Another important area of innovation is synthetic data and better training methods, which help models learn more safely and adapt to specialized fields like healthcare, education, and business automation. Overall, the recent wave of Generative AI breakthroughs shows a clear trend toward systems that are faster, more accessible, and more practical for real-world use. These advancements are shaping how people and organizations interact with intelligent technology every day.
  `;

  sourceUrl = "https://www.jpmorgan.com/insights/global-research/artificial-intelligence/generative-ai";

  techText = `
  This web application is built as a Single Page Application using Angular on the frontend and Node.js with Express on the backend. The backend uses MySQL to store chart data and implements JWT authentication to protect API routes. The frontend communicates with the backend through secure HTTP requests and uses Chart.js to render dynamic visualizations retrieved asynchronously from the database. The project is designed with accessibility principles, responsive UI components, and a clean component-based architecture. NGINX or serves the Angular build on port 80, while the Node.js backend runs independently on port 3000.

  `;
}

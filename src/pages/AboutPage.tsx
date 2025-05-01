import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const faqItems = [
  {
    question: "What is Quickset?",
    answer:
      "Quickset is a web application that allows League of Legends players to create custom item builds for their favorite champions. It provides an intuitive interface to select items, save builds, and export them directly to the game.",
  },
  {
    question: "How do I create a build?",
    answer:
      'To create a build, navigate to the "Create Build" page, select your champion, and then add items to your build by clicking on them in the item selection panel. You can filter items by category and search for specific items. Once you\'re satisfied with your build, you can save it or export it to the game.',
  },
  {
    question: "Can I export builds to the game?",
    answer:
      'Yes! Quickset allows you to export your builds directly to League of Legends. After creating a build, click the "Export" button to download a file that can be imported into the game. Place this file in your League of Legends config folder, and your build will be available in-game.',
  },
  {
    question: "Is Quickset affiliated with Riot Games?",
    answer:
      "No, Quickset is not affiliated with or endorsed by Riot Games. It is an independent project created by a League of Legends enthusiast to help the community. Riot Games, League of Legends, and all related properties are trademarks or registered trademarks of Riot Games, Inc.",
  },
  {
    question: "Is Quickset free to use?",
    answer:
      "Yes, Quickset is completely free to use. There are no premium features or subscriptions. The project is maintained as a hobby and a service to the League of Legends community.",
  },
  {
    question: "How often is the item database updated?",
    answer:
      "We strive to update our item database as soon as possible after each League of Legends patch. Usually, updates are available within 24–48 hours of a new patch release. If you notice any discrepancies, please let us know through the contact form below.",
  },
  {
    question: "Can I share my builds with others?",
    answer:
      "Yes! Each build has a unique shareable link that you can send to friends. They can view your build and even clone it to their own account with a single click. We're also working on community features to discover popular builds from other players.",
  },
];

const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envío
    setTimeout(() => {
      alert("Message sent!");
      setIsSubmitting(false);
    }, 1500);
  };
  const navigate = useNavigate();

  return (
    <div>
      <section className="about-title-section">
        <div className="about-title">
          <h1>About Quickset</h1>
          <p>
            Quickset is a personal project by Luis Enrique Juan Ferrer designed
            to help League of Legends players create, manage, and optimize their
            item builds quickly and efficiently.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqItems.map(({ question, answer }, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{question}</summary>
              <div className="faq-answer">{answer}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Have questions, suggestions, or found a bug? Feel free to reach out to
          us using the form below.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="name" className="contact-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email" className="contact-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="subject" className="contact-label">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is this regarding?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
          </div>

          <button
            type="submit"
            className="contact-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner" /> Sending...
              </>
            ) : (
              <>
                <span className="send-icon" /> Send Message
              </>
            )}
          </button>
        </form>
      </section>

      <section className="cta-section">
        <div className="cta-section-title">
          <h2>Ready to optimize your builds?</h2>
          <p>Start creating custom builds to dominate the Summoner's Rift</p>
          <div className="cta-section-options">
            <button onClick={() => navigate("/make-a-build")}>
              Get started now
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

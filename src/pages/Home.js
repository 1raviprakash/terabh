// src/pages/Home.js
import React from "react";
import styles from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={styles.title}>Welcome to bhAI</h1>
      <section style={styles.section}>
        <h2>Homepage</h2>
        <p>
          <em>
            bhAI is your friendly neighbourhood personal assistant. It gives you
            personalized responses, writes emails for you, communicates on your
            behalf, creates your personal website, manages your tasks and
            events, searches the web for you, sets reminders for you, manages
            your notes.
          </em>
        </p>
        <section>
          <h3>About bhAI</h3>
          <p>
            <em>
              Make time for what matters with bhAI. bhAI takes actions on your
              behalf through plugins.
            </em>
          </p>
        </section>
        <section>
          <h3>Getting Started</h3>
          <p>
            <em>
              • gmail: bhAI can help you with your emails, set reminders and
              send emails for you.
            </em>
          </p>
          <p>
            <em>
              • notes: bhAI can help you with your notes, search for your notes
              and remember your notes.
            </em>
          </p>
          <p>
            <em>
              • todo: bhAI can help you with your tasks, set reminders and
              manage your tasks.
            </em>
          </p>
          <p>
            <em>
              • information: bhAI can help you with your information, search for
              information and remember information.
            </em>
          </p>
          <p>
            <em>
              • ledger: bhAI can help you with your finances, set reminders and
              manage your finances.
            </em>
          </p>
          <p>
            <em>
              • calendar: bhAI can help you with your events, set reminders and
              manage your events.
            </em>
          </p>
          <p>
            <em>
              messages in “see” are currently being seen by bhAI, persist
              messages are remembered by bhAI and re-vealed messages are shared
              to the world.
            </em>
          </p>
        </section>
      </section>
      <section>
        <h2>Company</h2>
        <p>
          <em>Available for download ↓ and web ↗.</em>
        </p>
        <section>
          <h3>A truly personal personal-assistant</h3>
          <p>
            <em>
              Over time, bhAI knows and learns about you and is able to craft
              responses for you.
            </em>
          </p>
        </section>
        <section>
          <h3>Control your assistant using states</h3>
          <p>
            <em>
              bhAI communicates on your behalf with consent. The revealed
              assistant is the public face of your personal assistant. Context
              from messages pushed to revealed state are shared to the world.
              Anyone can chat with your revealed assistant and you can chat with
              anyone’s revealed assistant.
            </em>
          </p>
        </section>
        <section>
          <h3>Plugins make bhAI powerful</h3>
          <p>
            <em>
              imagine these plugins coming out from the center as ”rays” bye bye
              to opening apps and softwares. bhAI takes actions on your behalf
              through plugins. • gmail• notes • todo• information • ledger•
              calendar 1.3 messages in “see” are currently being seen by bhAI,
              persist messages are remembered by bhAI and re-vealed messages are
              shared to the world.
            </em>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Home;

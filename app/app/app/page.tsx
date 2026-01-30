export default function Page() {
  return (
    <div className="container">
      <h1>BBQ Hut – Order Ahead</h1>

      <div className="card">
        <h2>Dinners</h2>
        <p>Half Chicken Dinner – $15.50</p>
        <p>Pulled Pork Dinner – $16.50</p>
        <p>Brisket Dinner – $26.00</p>
      </div>

      <div className="card">
        <h2>How Ordering Works</h2>
        <ul>
          <li>Same-day orders: pay at pickup or online</li>
          <li>Future orders: online payment required</li>
          <li>Orders are sent by email-to-fax</li>
        </ul>
      </div>

      <div className="card">
        <p>This is a preview build. Ordering and Square checkout will be added next.</p>
      </div>
    </div>
  );
}

import './App.css';
import restaurant from './logo.svg'

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We server the most {props.adjective} food around.</p>
      <img src={restaurant} alt='react logo representing restaurant' height={200} />
      <ul style={{ textAlign: 'left' }}>
        { 
          props.dishes.map((dish)=> (
          <li key={dish.id}>{dish.title}</li>
          ))
        }
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  'Macaroni and Cheese',
  'Salmon',
  'Tofu with Vegetables',
  'Ministroni'
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}));

function App() {
  return (
    <div className='App'>
      <Header name='Ryan'/>
      <Main adjective='amazing' dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

import { CategoryCard } from "../components/CategoryCard";
import { Nav } from "../components/Nav";
import { Orders } from "../components/Orders";

export function ProfBody(props) {
  return (
    <div className="prof-body">
      <div className="main">
        <h1>Welcome back, {props.name}!</h1>
        <div className="category-cards">
          <div className="category-heading">
            <h2>Food Categories</h2>
          </div>
          <div className="cat-cards">
            <CategoryCard
              url="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-breakfast-hotel-essentials-justicon-lineal-color-justicon.png"
              name="breakfast"
            />
            <CategoryCard
              url="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/null/external-lunch-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              name="lunch/supper"
            />
            <CategoryCard
              url="https://img.icons8.com/color-glass/48/null/potato-chips.png"
              name="snacks"
            />
            <CategoryCard
              url="https://img.icons8.com/cotton/64/null/beach-cocktail--v2.png"
              name="drinks"
            />
            <CategoryCard
              url="https://img.icons8.com/cute-clipart/64/null/croissant.png"
              name="desserts"
            />
          </div>
        </div>
      </div>
      <div className="aside">
        <Orders />
      </div>
    </div>
  );
}

export function UserProfile() {
  return (
    <div className="Profile">
      <Nav />
      <ProfBody name="Victoria" />
    </div>
  );
}

export function AdminProfile() {
  return (
    <div className="admin-prof">
      <Nav users="Users" />
      <ProfBody name="Victoria" />
    </div>
  );
}

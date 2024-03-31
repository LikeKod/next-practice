import { getMenu } from "../../api/menu";

export default async function Menu(){
    const menu = await getMenu(0);
    return (
      <main >
        <div>
          {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
        </div>
      </main>
    );
  }
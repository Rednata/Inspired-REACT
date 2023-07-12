import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './Category.module.scss'

export const Category = ({list}) => {
  const locate = useLocation();
  let current = list.findIndex(item => item.link === locate.pathname.slice(1)) ;

  if (current === -1) current = 0;
  return (
    <ul className={s.category}>
      {
        list[current].categories.map(category => (
          <li key={category.link}>
            <NavLink className={s.link} href="">
            {category.title}
            </NavLink>
            </li> 
        ))
      }
    </ul>
  )
};

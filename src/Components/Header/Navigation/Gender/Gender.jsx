import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from 'classnames';

export const Gender = ({list}) => (
    <div>
      <ul className={s.gender}>
        {
          list.map(item => (
            <li className={s.item} key={item.link}>
              <NavLink 
                className={({isActive}) => cn(s.link, isActive && s.linkActive)} 
                to={item.link}>{item.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );

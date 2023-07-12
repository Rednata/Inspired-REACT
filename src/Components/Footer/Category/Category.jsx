import s from '../../Footer/Footer.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Category = ({list}) => (
  <div className={s.category}>
    <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>

    <ul className={s.categoryList}>

      {list.map(item => (
        <li key={item.link}>
          <h3 className={s.categorySubtitle}>
            <NavLink
              className={s.link}
              to={item.link}>
                {item.title}
            </NavLink>
          </h3> 

          <ul className={s.categorySublist}>
            {
              item.categories.map(category => (
                <li key={category.link}>
                  <NavLink className={s.link} to={`${item.link}/${category.link}`} >{category.title}</NavLink>                
              </li>  
              ))
            }
          </ul>
          
        </li>

      ))}
      
    </ul>
  </div>
)
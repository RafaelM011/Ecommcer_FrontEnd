// import Hats from '../../assets/hats.png'
import type CSS from 'csstype'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoriesContext } from '../../context/categories/categories.context'
import { type CategoryData } from '../../app.types'

interface Props {
  sectionName: string
  sectionImage: string
}

export const Section: React.FC<Props> = ({ sectionName, sectionImage }): JSX.Element => {
  const style: CSS.Properties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${sectionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '5s'
  }
  const categories = useContext(CategoriesContext)
  const [item, setItem] = useState({})

  useEffect(() => {
    if (categories.length !== 0) {
      const item: CategoryData[] = categories.filter(category => {
        return category.title === sectionName
      })
      setItem(item[0])
    }
  }, [categories])

  return (
    <div className="group relative w-3/12 min-w-[400px] h-[450px] flex justify-center items-center grow overflow-hidden border-black border-2">
      <div style={style} className='hover:scale-[110%]'></div>
      <Link to={`shop/${sectionName}`} state={item}>
      <div className="group-hover:opacity-[0.99] opacity-80 w-[200px] h-[200px] bg-white border-black border-4 flex flex-col justify-evenly items-center">
        <h2 className="text-2xl font-bold text-slate-500"> {sectionName}</h2>
        <p className="font-semibold text-slate-500"> SHOP NOW </p>
      </div>
    </Link>
    </div>
  )
}

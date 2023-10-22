import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle=(heading,subtitle)=>{
        return(<div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    }

  return (
    <div className='widgets'> 
        <div className="widgets_header">
            <h2>LinkedIn&nbsp;News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("React first project finally completed","Top news (Story by Arin Srivastava) - 9099 readers")}
        {newsArticle("India’s US food exports refusal rate 7 times higher than China’s","Story by Aggam Walia - 7099 readers")}
        {newsArticle("ODI World Cup 2023 Points Table: Updated standings after Australia beat Pakistan by 62 runs","Story by dnawebdesk@gmail.com (DNA Web Desk)  - 3099 readers")}
        {newsArticle("Israel-Palestine War LIVE: IDF Warns Gazans to Move Or Risk Being Seen 'Terrorists'; Over 1,800 Kids Killed in Gaza So Far","Story by editor@news18.com (News18 English) - 2099 readers")}
    </div>
  )
}

export default Widgets
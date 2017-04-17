import React from 'react';
import styles from './index.css';
const Pager = (props) => {
    const { totalPage, currentIndex, onPageChange } = props;


    const makeArr = (n, m) => {
        if (!m) { m = n; n = 1; }
        let arr = [];
        for (let i = n; i <= m; i++) arr.push(i);
        return arr;
    }
    const makeList = () => {
        let minN = Math.ceil(10 / 2), minC = minN - 1, maxN = Math.floor(10 / 2), maxC = totalPage - maxN;
        if (totalPage == 0) return [];
        else if (totalPage <= 10) return makeArr(totalPage);
        else if (currentIndex <= minN) return makeArr(10);
        else if (currentIndex >= maxC) return makeArr(totalPage - 10 + 1, totalPage);
        else return makeArr(currentIndex - minC, currentIndex + maxN);
    }

    let list = makeList();
    const PG = list.map((va, i) => 
        <a className={'pageNum ' + (currentIndex == va ? 'page-active' : '')} key={i}>{va}</a>
    );


    function onDelegateClick(e) {
        const cls = e.target.className.replace('page-active').replace(/ /g, '');
        switch (cls) {
            case 'page-pre':
                if (currentIndex === 1) {
                    return
                }
                onPageChange(currentIndex - 1)
                break;
            case 'page-next':
                if (currentIndex === totalPage) {
                    return
                }
                onPageChange(currentIndex + 1)
                break;
            case 'pageNum':
                onPageChange(e.target.innerText - 0)
                break;
            default:
                break;
        }
    }
    return (
        <div className={styles.normal} onClick={onDelegateClick}>
            <span>共{totalPage}页</span>
            <a className='page-pre'>上一页</a>
            {PG}
            <a className='page-next'>下一页</a>
        </div>
    )
}
export default Pager;
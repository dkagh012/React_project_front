import classes from './View.module.scss';
import Image from '../../assets/image/logo.png'
function View() {
  return (
    <section className="container">
      <h2 className={classes.title}>인플루드 (INFLUDE)</h2>
      <div className={classes.View_wrap}>
        <div className={classes.View_left}>
          <div className={classes.View_card}>
            <div className={classes.View_Img}>
              <img src={Image} alt=""></img>
            </div>
            <div className={classes.View_Info}>
              <span>
                여기는 기업의 소개가 들어갈거여 여기는 기업의 소개가 들어갈거여 여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기

                여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의 소개가 들어갈거여여기는 기업의... 더 보기
              </span>
            </div>
          </div>

        </div>
        <div className={classes.View_right}></div>

      </div>

    </section>
  )
}

export default View;
import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './Block6.scss'
import useFetch from '../../../../../hooks/use-hooks'
import LoaderCircle from '../../../../../SharedComponents/LoaderCircle/LoaderCircle'
import { Config } from '../../../../../Config/Config'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'

const Block6 = () => {
  const url = `https://newg30.ru/api/works.php`
  const { data, error } = useFetch<Work[]>(url)
  const [mobWorks, setMobWorks] = useState<boolean>(true)

  interface Work {
    id: number
    imgPath: string
    title: string
    body: string
  }

  // console.log(data)
  return (
    <Container fluid className="Block6">
      <Container>
        <h2>Выполненные проекты</h2>
        <h6>Клиенты доверяют нам выполнение любых, самых трудных задач</h6>
        {/* {error ? <p>Ошибка получения данных</p> : null} */}
        <Row className="Block6__card-deck d-none d-md-flex">
          {/* {!data ? <LoaderCircle /> : null}
          {
            data && data.map((work) => {
            data && */}
          {Config.works.map((work) => {
            return (
              <div key={work.id} className="Block6__card">
                <div className="Block6__card-img">
                  <img className={'img-fluid'} src={`${work.imgPath}`} alt="project-image" />
                </div>
                <div className="Block6__card-text">
                  <h5>{work.title}</h5>
                  <p>{work.body}</p>
                </div>
              </div>
            )
          })}
        </Row>

        <Row className="Block6__card-deck d-flex d-md-none">
          {mobWorks
            ? Config.mobWorks.map((work) => {
                return (
                  <div key={work.id} className="Block6__card">
                    <div className="Block6__card-img">
                      <img className={'img-fluid'} src={`${work.imgPath}`} alt="project-image" />
                    </div>
                    <div className="Block6__card-text">
                      <h5>{work.title}</h5>
                      <p>{work.body}</p>
                    </div>
                  </div>
                )
              })
            : Config.works.map((work) => {
                return (
                  <div key={work.id} className="Block6__card">
                    <div className="Block6__card-img">
                      <img className={'img-fluid'} src={`${work.imgPath}`} alt="project-image" />
                    </div>
                    <div className="Block6__card-text">
                      <h5>{work.title}</h5>
                      <p>{work.body}</p>
                    </div>
                  </div>
                )
              })}

          {mobWorks && <ButtonComponent onClick={() => setMobWorks(false)}>Показать еще</ButtonComponent>}
        </Row>
      </Container>
    </Container>
  )
}

export default Block6

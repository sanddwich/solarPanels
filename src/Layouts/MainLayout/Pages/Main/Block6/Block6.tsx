import React from 'react'
import {Container} from 'react-bootstrap'
import './Block6.scss'
import useFetch from "../../../../../hooks/use-hooks";
import LoaderCircle from "../../../../../SharedComponents/LoaderCircle/LoaderCircle";

const Block6 = () => {
    const url = `https://newg30.ru/api/works.php`
    const {data, error} = useFetch<Work[]>(url)

    interface Work {
        id: number
        imgPath: string
        title: string
        body: string
    }

    console.log(data)
    return (
        <Container fluid className="Block6">
            <Container>
                <h2>Выполненные проекты</h2>
                {error ? <p>Ошибка получения данных</p> : null}
                <div>Клиенты доверяют нам выполнение любых, самых трудных задач</div>
                <div className="Block6__card-deck">
                    {!data ? LoaderCircle : null}
                    {
                        data && data.map((work) => {
                            return (
                                <div key={work.id}  className="Block6__card">
                                    <div className="Block6__card-img">
                                        <img className={"img-fluid"} src={`${work.imgPath}`}
                                             alt="project-image"/>
                                    </div>
                                    <div className="Block6__card-text">
                                        <h5>{work.title}</h5>
                                        <p>{work.body}</p>
                                    </div>
                                </div>
                            )
                        })
                        }
                        </div>
                        </Container>
                        </Container>
                        )
                    }

                    export default Block6

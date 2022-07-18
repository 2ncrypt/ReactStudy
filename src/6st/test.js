import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Table, message, Spin, Avatar, Button } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import Fake from "./ProductList";
import "antd/dist/antd.css";
import "./style.scss";

const dataSource = Fake;

class SupplierProduct extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    image: "https://picsum.photos/60/60",
                    title: "Morbi",
                    reference: "319694",
                    category: "Lobortis",
                    added: "10/02/1980",
                    updated: "20/05/2015",
                    distributionCenter: "Londrina"
                },
                {
                    image: "https://picsum.photos/60/60",
                    title: "Proin posuere",
                    reference: "802660",
                    category: "Curabitur",
                    added: "15/06/2010",
                    updated: "08/01/2017",
                    distributionCenter: "Cambé"
                },
                {
                    image: "https://picsum.photos/60/60",
                    title: "Aenean urna tellus",
                    reference: "654515",
                    category: "Etiam",
                    added: "04/12/2001",
                    updated: "18/05/2014",
                    distributionCenter: "Maringá"
                },
                {
                    image: "https://picsum.photos/60/60",
                    title: "Curabitur ultrices",
                    reference: "119064",
                    category: "Morbius",
                    added: "12/12/2012",
                    updated: "17/09/2018",
                    distributionCenter: "Guarapuava"
                },
                {
                    image: "https://picsum.photos/60/60",
                    title: "Phasellus sapien quam",
                    reference: "612992",
                    category: "Vestibulum",
                    added: "10/04/1994",
                    updated: "10/11/2005",
                    distributionCenter: "Pinhais"
                },
                {
                    image: "https://picsum.photos/60/60",
                    title: "Fusce porttitor",
                    reference: "349567",
                    category: "Suspendisse",
                    added: "23/06/1999",
                    updated: "03/12/2017",
                    distributionCenter: "Colombo"
                }
            ],
            hasMore: true
        };
    }

    handleInfiniteOnLoad = () => {
        let products = this.state.products;

        this.setState({
            loading: true
        });

        if (products.length > 100) {
            message.warning("Fim da listagem!!");
            this.setState({
                hasMore: false,
                loading: false
            });
            return;
        }

        // Concatenando mais elementos à lista
        products = products.concat(dataSource);

        setTimeout(() => {
            this.setState({
                products,
                loading: false
            });
        }, 1000);
    };

    render() {
        const { products } = this.state;

        const columns = [
            {
                title: "Imagem",
                dataIndex: "image",
                key: "image"
            },
            {
                title: "Título",
                dataIndex: "title",
                key: "title"
            },
            {
                title: "Referência",
                dataIndex: "reference",
                key: "reference"
            },
            {
                title: "Categoria",
                dataIndex: "category",
                key: "category"
            },
            {
                title: "Adicionado",
                dataIndex: "added",
                key: "added"
            },
            {
                title: "Última Atualização",
                dataIndex: "updated",
                key: "updated"
            },
            {
                title: "CD",
                dataIndex: "distributionCenter",
                key: "distributionCenter"
            }
        ];

        const data = products.map((prod, index) => ({
            key: index,
            image: (
                <div>
                    <Avatar shape="square" src={prod.image} alt={prod.title} />
                </div>
            ),
            title: <div>{prod.title}</div>,
            reference: <div>{prod.reference}</div>,
            category: <div>{prod.category}</div>,
            added: <div>{prod.added}</div>,
            updated: <div>{prod.updated}</div>,
            distributionCenter: <div>{prod.distributionCenter}</div>
        }));

        return (
            <div>
                <h2>Produtos</h2>
                <p>Confira a lista de produtos que este distribuidor fornece.</p>
                <div
                    className="infinite-container"
                    style={{ height: "300px", overflow: "auto" }}
                >
                    <InfiniteScroll
                        initialLoad={false}
                        loadMore={this.handleInfiniteOnLoad}
                        hasMore={!this.state.loading && this.state.hasMore}
                        threshold={20}
                        useWindow={false}
                    >
                        <Table columns={columns} dataSource={data} pagination={false} />
                        {this.state.loading && this.state.hasMore && (
                            <div
                                className="spinner"
                                style={{
                                    bottom: "40px",
                                    position: "absolute",
                                    textAlign: "center",
                                    width: "100%"
                                }}
                            >
                                <Spin />
                            </div>
                        )}
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<SupplierProduct />, rootElement);

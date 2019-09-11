import React from 'react';
import ImgList from '../../components/listComponent/imgList';
import Router from 'next/router';
import { getImgList, deleteImgItem } from '../../actions/imgBoard';

class SecretPage extends React.Component {
  static async getInitialProps({ query }) {
    let imgList = {};
    try {
      let data = {
        limit: 20,
        offset: 0
      };
      imgList = await getImgList(data);
      console.log('check me !!', imgList);
    } catch (err) {
      imgList = { result: [], total: 0 };
    }
    return {
      imgList
    };
  }
  state = {
    onMenu: 'Memory',
    imgList: !this.props.imgList.result ? [] : this.props.imgList.result,
    total: !this.props.imgList.total ? [] : this.props.imgList.total
  };

  // **메뉴 이동
  handleMenu = e => {
    let checkedMenu = e.target.text;
    this.setState({
      onMenu: checkedMenu
    });
  };

  // **검색 on , off
  onSearchInput = e => {
    e.preventDefault();
    $('form').addClass('opened');
    $("input[type='search']").focus();
  };

  offSearchInput = e => {
    $('form').removeClass('opened');
  };

  // **페이지 이동
  goToInsertPage = e => {
    const href = `/secretpage/insert`;
    Router.push(href);
  };

  // **API 사용
  deletedImage = async (seq, img) => {
    try {
      if (confirm('Are you sure you want to delete it?')) {
        let res = await deleteImgItem(seq, img);
        if (res.status === 200) {
          this.updatedList();
        }
      } else {
        return false;
      }
    } catch (err) {
      console.log('delete img err', err);
    }
  };

  updatedList = async () => {
    try {
      let data = {
        limit: 20,
        offset: 0
      };
      let res = await getImgList(data);
      this.setState({
        imgList: res.result
      });
    } catch (err) {
      console.log('upload  list err');
    }
  };

  handleChangePage = no => {
    console.log('check no');
  };

  render() {
    const { onMenu, imgList, total } = this.state;
    return (
      <>
        {/* <!-- Heading --> */}
        <div id="heading">
          <h1>Secret Page</h1>
        </div>
        {/* <!-- Main --> */}
        <section id="main" className="wrapper">
          <div className="inner">
            <header>
              <h2>Jong's Space - {onMenu}</h2>
            </header>
            <hr />
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-one"
                >
                  Memory
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-two"
                >
                  Creation
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-three"
                >
                  Undetermined
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-four"
                >
                  Undetermined2
                </a>
              </div>
            </div>
          </div>
        </section>

        <form className="search-bar">
          <input
            type="search"
            placeholder="Search ex. 1908 (년/월)"
            onBlur={this.offSearchInput}
          />
          <button onClick={this.onSearchInput}>
            <span className="fontawesome-search"></span>
          </button>
        </form>

        {onMenu === 'Memory' ? (
          <ImgList
            imgList={imgList}
            deletedImage={this.deletedImage}
            handleChangePage={this.handleChangePage}
            total={total}
          />
        ) : (
          ''
        )}
        {onMenu === 'Creation' ? 'Creation' : ''}
        {onMenu === 'Undetermined' ? 'Undetermined' : ''}
        {onMenu === 'Undetermined2' ? 'Undetermined2' : ''}

        <div className="insetButton">
          <button onClick={this.goToInsertPage}> 등록 </button>
        </div>
      </>
    );
  }
}

export default SecretPage;


const elArticles = document.getElementById("articles");


API.get(`http://apiforlearning.zendvn.com/api/v2/articles/3691`).then((res) => {
    const data = res.data.data;
    renderArticles(data);
  });

function renderArticles(list) {
    let html = "";
    list.forEach(function (item) {
        // class= "h-100"
        html += /*html*/ `
        <section class="wrapper bg-soft-primary" id="articles">
        <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div class="row">
            <div class="col-md-10 col-xl-8 mx-auto">
              <div class="post-header">
                <div class="post-category text-line">
                  <a href="#" class="hover" rel="category">${item.category.nam}</a>
                </div>
                <!-- /.post-category -->
                <h1 class="display-1 mb-4">${item.title}</h1>
                <ul class="post-meta mb-5">
                  <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${item.publish_date}</span></li>
                  <li class="post-author"><a href="#"><i class="uil uil-user"></i><span>By Sandbox</span></a></li>
                  <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>3<span> Comments</span></a></li>
                  <li class="post-likes"><a href="#"><i class="uil uil-heart-alt"></i>3<span> Likes</span></a></li>
                </ul>
                <!-- /.post-meta -->
              </div>
              <!-- /.post-header -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>`
      + /*html*/ 
      `<section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="blog single mt-n17">
                <div class="card">
                  <figure class="card-img-top"><img src="${item.thumb}" alt="" /></figure>
                  <div class="card-body">
                    <div class="classic-view">
                      <article class="post">
                        <div class="post-content mb-5">
                          ${item.content}
                        </div>
                        <!-- /.post-content -->
                        <div class="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                          <div>
                            <ul class="list-unstyled tag-list mb-0">
                              <li><a href="#" class="btn btn-soft-ash btn-sm rounded-pill mb-0">Still Life</a></li>
                              <li><a href="#" class="btn btn-soft-ash btn-sm rounded-pill mb-0">Urban</a></li>
                              <li><a href="#" class="btn btn-soft-ash btn-sm rounded-pill mb-0">Nature</a></li>
                            </ul>
                          </div>
                          <div class="mb-0 mb-md-2">
                            <div class="dropdown share-dropdown btn-group">
                              <button
                                class="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="uil uil-share-alt"></i> Share </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"><i class="uil uil-twitter"></i>Twitter</a>
                                <a class="dropdown-item" href="#"><i class="uil uil-facebook-f"></i>Facebook</a>
                                <a class="dropdown-item" href="#"><i class="uil uil-linkedin"></i>Linkedin</a>
                              </div>
                              <!--/.dropdown-menu -->
                            </div>
                            <!--/.share-dropdown -->
                          </div>
                        </div>
                        <!-- /.post-footer -->
                      </article>
                      <!-- /.post -->
                    </div>
                    <!-- /.classic-view -->
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
              <!-- /.blog -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
        `;
    });
    
    elArticles.innerHTML = html;
    
    }
    
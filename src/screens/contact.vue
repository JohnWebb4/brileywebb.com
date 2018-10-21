<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="images/cactus.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="images/cactus.jpg" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Briley Webb</p>
                <p class="title is-6">briley@brileywebb.com</p>
              </div>
            </div>
            <div class="content">
              {{ textTalkAt }}<a href="mailto:Briley@brileywebb.com">Briley</a>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" href="mailto:Briley@brileywebb.com">{{email}}</a>
          </footer>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: __('email'),
    textTalkAt: __('talkAt'),
  }),
};
</script>

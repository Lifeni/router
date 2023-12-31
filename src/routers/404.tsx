import { Layout } from '../components/Layout'

interface Props {
  code: 404 | 400 | 403 | 500
}

const maps = {
  404: ['404 Page Not Found', '找不到页面'],
  400: ['400 Bad Request', '请求错误'],
  403: ['403 Forbidden', '禁止访问'],
  500: ['500 Internal Server Error', '服务器错误'],
}

export const ErrorPage = ({ code }: Props) => (
  <Layout
    children={(() => (
      <div class="flash py-2">
        <section class="d-flex flex-items-start">
          <span class="octicon my-1">
            <iconify-icon width="16" height="18" icon="octicon:info-16" />
          </span>
          <div class="d-flex flex-column py-1">
            <span class="f5 mb-1 text-bold">{maps[code][0]}</span>
            <span class="f6 color-fg-subtle">{maps[code][1]}</span>
          </div>
        </section>
      </div>
    ))()}
  />
)

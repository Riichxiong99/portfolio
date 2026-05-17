const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const techs = [
  { src: `${BASE}/python/python-original.svg`, label: 'Python' },
  { src: `${BASE}/c/c-original.svg`, label: 'C' },
  { src: `${BASE}/cplusplus/cplusplus-original.svg`, label: 'C++' },
  { src: `${BASE}/java/java-original.svg`, label: 'Java' },
  { src: `${BASE}/kotlin/kotlin-original.svg`, label: 'Kotlin' },
  { src: `${BASE}/r/r-original.svg`, label: 'R' },
  { src: `${BASE}/matlab/matlab-original.svg`, label: 'MATLAB' },
  { src: `${BASE}/javascript/javascript-original.svg`, label: 'JavaScript' },
  { src: `${BASE}/spring/spring-original.svg`, label: 'Spring Boot' },
  { src: `${BASE}/react/react-original.svg`, label: 'React' },
  { src: `${BASE}/postgresql/postgresql-original.svg`, label: 'PostgreSQL' },
  { src: `${BASE}/sqlite/sqlite-original.svg`, label: 'SQLite' },
  { src: `${BASE}/android/android-original.svg`, label: 'Android' },
  { src: `${BASE}/qt/qt-original.svg`, label: 'Qt / QML' },
  { src: `${BASE}/docker/docker-original.svg`, label: 'Docker' },
  { src: `${BASE}/postman/postman-original.svg`, label: 'Postman' },
  { src: `${BASE}/figma/figma-original.svg`, label: 'Figma' },
  { src: `${BASE}/cmake/cmake-original.svg`, label: 'CMake' },
  { src: `${BASE}/git/git-original.svg`, label: 'Git' },
  { src: `${BASE}/linux/linux-original.svg`, label: 'Linux' },
]

const rows = []
for (let i = 0; i < techs.length; i += 7) rows.push(techs.slice(i, i + 7))

function TechStack() {
  return (
    <div id="work" className="fade-section" style={{ minHeight: '100vh', padding: '100px 48px' }}>
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {rows.map((row, i) => (
          <div key={i} className="tech-row">
            {row.map(({ src, label }) => (
              <div key={label} className="tech-tile">
                <img src={src} alt={label} width="36" height="36" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack

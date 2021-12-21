mongoose
  .connect(
    `mongodb+srv://user8465z:${process.env.MONGODB_PASSWORD}@cluster0.oxi8g.mongodb.net/filmsDB?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log("Error connecting to MongoDB", error))

const app = express()

app.use(express.json())

app.use("/api/films", films)

const port = 5000

app.listen(port, () => console.log("Server is listening on port " + port))

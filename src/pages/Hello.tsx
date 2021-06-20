import styles from "../styles/pages/hello.module.scss";
import helloAPI from "../lib/api/helloAPI";

function Hello() {
	const get = async () => {
    let result = await helloAPI.get()
		console.log(result);
  };
	return (
	  <div className="Hello">
			      <input
        type="button"
        className={styles.HelloButton}
        value="Read"
        onClick={get}
      />
	  </div>
	);
}

export default Hello;


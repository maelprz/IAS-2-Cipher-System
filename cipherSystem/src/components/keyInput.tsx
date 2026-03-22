export default function KeyInput({ cipher, keyData, setKeyData }: any) {
  if (cipher === "affine") {
    return (
      <div className="flex gap-4 mt-4">
        <input
          type="number"
          placeholder="a"
          className="p-2 border rounded"
          value={keyData.a || ""}
          onChange={(e) =>
            setKeyData({ ...keyData, a: Number(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="b"
          className="p-2 border rounded"
          value={keyData.b || ""}
          onChange={(e) =>
            setKeyData({ ...keyData, b: Number(e.target.value) })
          }
        />
      </div>
    );
  }

  if (cipher === "playfair") {
    return (
      <input
        type="text"
        placeholder="Keyword"
        className="w-full p-2 border rounded mt-4"
        value={keyData.keyword || ""}
        onChange={(e) => setKeyData({ ...keyData, keyword: e.target.value })}
      />
    );
  }

  if (cipher === "hill") {
    return (
      <textarea
        className="w-full p-2 border rounded mt-4"
        placeholder="Enter matrix (e.g. 3 3\n2 5)"
        value={keyData.matrix || ""}
        onChange={(e) => setKeyData({ ...keyData, matrix: e.target.value })}
      />
    );
  }

  return <p className="mt-4 text-gray-500">No key needed</p>;
}

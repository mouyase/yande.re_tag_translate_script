package tech.yojigen.boorutagcn;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

public class Main {
    private static Gson gson = new GsonBuilder().disableHtmlEscaping().create();

    public static void main(String[] args) throws IOException {
        Document document = Jsoup.parse(new URL("https://github.com/4cy/Script-BooruTagCN/wiki/Tags"), 1000 * 30);
        Map<String, String> map = new HashMap<String, String>();
        for (Element element : document.select(".markdown-body tr")) {
            if (!element.toString().contains("标签")) {
                map.put(element.getElementsByAttributeValue("align", "left").get(0).html(), element.getElementsByAttributeValue("align", "left").get(1).html());
            }
        }
        Files.write(Paths.get("./KeyMap.json"), gson.toJson(map).getBytes());
    }
}
